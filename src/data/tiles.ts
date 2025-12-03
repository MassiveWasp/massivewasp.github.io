export type TileTag = 'Switching' | 'Routing' | 'Wireless' | 'Operations' | 'Troubleshooting' | 'Security';

export interface TileData {
    title: string;
    tile_order_nr: number;
    scriptlink: string;
    tag: TileTag;
    description: string;
}

export const tilesData: TileData[] = [
    {
        title: "VLAN Configuration",
        tile_order_nr: 1,
        scriptlink: "vlan_config.py",
        tag: "Switching",
        description: "Automated script to configure standard VLANs across access switches."
    },
    {
        title: "OSPF Setup",
        tile_order_nr: 2,
        scriptlink: "ospf_deploy.ansible",
        tag: "Routing",
        description: "Rapid deployment of OSPF areas and interface costs."
    },
    {
        title: "Port Security Audit",
        tile_order_nr: 3,
        scriptlink: "audit_security.sh",
        tag: "Security",
        description: "Scans interfaces for port security violations and generates a report."
    },
    {
        title: "Firmware Upgrade",
        tile_order_nr: 4,
        scriptlink: "ios_upgrade.py",
        tag: "Operations",
        description: "Safe firmware upgrade procedure with rollback capability."
    },
    {
        title: "ACL Generator",
        tile_order_nr: 5,
        scriptlink: "acl_gen.py",
        tag: "Security",
        description: "Generates standard ACLs based on policy definitions."
    },
    {
        title: "Interface Reset",
        tile_order_nr: 6,
        scriptlink: "int_reset.tcl",
        tag: "Troubleshooting",
        description: "Batch reset of error-disabled interfaces."
    }
];
