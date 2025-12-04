import tkinter as tk
from tkinter import messagebox, scrolledtext
import ipaddress
import threading
from netmiko import ConnectHandler, NetmikoTimeoutException, NetmikoAuthenticationException

class NetworkDiscoveryApp:
    def __init__(self, root):
        self.root = root
        self.root.title("Cisco CDP/LLDP Discovery Tool")
        self.root.geometry("600x500")

        # Input Frame
        input_frame = tk.Frame(root, padx=10, pady=10)
        input_frame.pack(fill=tk.X)

        # IP/Subnet/Hostname
        tk.Label(input_frame, text="IP Address, Subnet, or Hostname:").grid(row=0, column=0, sticky="w")
        self.ip_entry = tk.Entry(input_frame, width=40)
        self.ip_entry.grid(row=0, column=1, padx=5, pady=5)

        # Username
        tk.Label(input_frame, text="Username:").grid(row=1, column=0, sticky="w")
        self.username_entry = tk.Entry(input_frame, width=40)
        self.username_entry.grid(row=1, column=1, padx=5, pady=5)

        # Password
        tk.Label(input_frame, text="Password:").grid(row=2, column=0, sticky="w")
        self.password_entry = tk.Entry(input_frame, show="*", width=40)
        self.password_entry.grid(row=2, column=1, padx=5, pady=5)

        # Secret (Enable Password) - Optional but good to have
        tk.Label(input_frame, text="Enable Secret (Optional):").grid(row=3, column=0, sticky="w")
        self.secret_entry = tk.Entry(input_frame, show="*", width=40)
        self.secret_entry.grid(row=3, column=1, padx=5, pady=5)

        # Run Button
        self.run_button = tk.Button(input_frame, text="Start Discovery", command=self.start_discovery_thread)
        self.run_button.grid(row=4, column=1, pady=10, sticky="e")

        # Output Area
        self.output_area = scrolledtext.ScrolledText(root, width=70, height=20)
        self.output_area.pack(padx=10, pady=10, fill=tk.BOTH, expand=True)

    def log(self, message):
        self.output_area.insert(tk.END, message + "\n")
        self.output_area.see(tk.END)

    def start_discovery_thread(self):
        target = self.ip_entry.get().strip()
        username = self.username_entry.get().strip()
        password = self.password_entry.get().strip()
        secret = self.secret_entry.get().strip()

        if not target or not username or not password:
            messagebox.showerror("Error", "Please fill in IP/Subnet/Hostname, Username, and Password.")
            return

        self.run_button.config(state=tk.DISABLED)
        self.output_area.delete(1.0, tk.END)
        
        thread = threading.Thread(target=self.run_discovery, args=(target, username, password, secret))
        thread.daemon = True
        thread.start()

    def ask_user_details(self, ip, event, result_container):
        response = messagebox.askyesno("Show Details", f"Show detailed neighbors for {ip}?")
        result_container['show_details'] = response
        event.set()

    def run_discovery(self, target, username, password, secret):
        try:
            hosts = []
            # Determine if it's a single IP, a subnet, or a hostname
            try:
                # Try as subnet or IP
                ip_net = ipaddress.ip_network(target, strict=False)
                # If it's a network (e.g. /24), get hosts
                if ip_net.num_addresses > 1:
                    hosts = list(ip_net.hosts())
                else:
                    # Single IP
                    hosts = [ipaddress.ip_address(target)]
            except ValueError:
                # Not a valid IP or Subnet, assume it's a hostname
                hosts = [target]

            self.log(f"Starting discovery on {len(hosts)} host(s)...")

            for host in hosts:
                ip = str(host)
                self.log(f"Connecting to {ip}...")
                
                device = {
                    'device_type': 'cisco_ios',
                    'host': ip,
                    'username': username,
                    'password': password,
                    'secret': secret,
                }

                try:
                    net_connect = ConnectHandler(**device)
                    if secret:
                        net_connect.enable()
                    
                    # Get Hostname
                    hostname = net_connect.find_prompt().strip('#>')
                    self.log(f"Connected to {hostname} ({ip})")

                    # Get CDP Summary
                    self.log(f"--- CDP Neighbors (Summary) for {ip} ---")
                    cdp_output = net_connect.send_command("show cdp neighbors")
                    self.log(cdp_output)

                    # Get LLDP Summary
                    self.log(f"--- LLDP Neighbors (Summary) for {ip} ---")
                    lldp_output = net_connect.send_command("show lldp neighbors")
                    self.log(lldp_output)

                    # Ask for details
                    event = threading.Event()
                    result_container = {}
                    self.root.after(0, lambda: self.ask_user_details(ip, event, result_container))
                    event.wait()

                    if result_container.get('show_details'):
                        self.log(f"Fetching details for {ip}...")
                        # Get CDP Details
                        self.log(f"--- CDP Neighbors (Detail) for {ip} ---")
                        cdp_detail = net_connect.send_command("show cdp neighbors detail")
                        self.log(cdp_detail)

                        # Get LLDP Details
                        self.log(f"--- LLDP Neighbors (Detail) for {ip} ---")
                        lldp_detail = net_connect.send_command("show lldp neighbors detail")
                        self.log(lldp_detail)
                    else:
                        self.log(f"Skipping details for {ip}.")

                    net_connect.disconnect()
                    self.log(f"Finished {ip}\n" + "-"*40)

                except NetmikoTimeoutException:
                    self.log(f"Timeout connecting to {ip}")
                except NetmikoAuthenticationException:
                    self.log(f"Authentication failure for {ip}")
                except Exception as e:
                    self.log(f"Error connecting to {ip}: {str(e)}")

        except Exception as e:
            self.log(f"Unexpected error: {str(e)}")
        finally:
            self.log("Discovery complete.")
            self.root.after(0, lambda: self.run_button.config(state=tk.NORMAL))

if __name__ == "__main__":
    root = tk.Tk()
    app = NetworkDiscoveryApp(root)
    root.mainloop()
