import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'script-download-handler',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url?.startsWith('/scripts/')) {
            const filename = req.url.replace('/scripts/', '');
            const filePath = path.join(__dirname, 'public', 'scripts', filename);

            if (fs.existsSync(filePath)) {
              const fileContent = fs.readFileSync(filePath);
              res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
              res.setHeader('Content-Type', 'application/octet-stream');
              res.setHeader('Content-Length', fileContent.length.toString());
              res.end(fileContent);
              return;
            }
          }
          next();
        });
      },
    },
  ],
})
