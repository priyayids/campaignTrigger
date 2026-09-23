# Agent Notes

## Project: Campaign Trigger

Simple Express.js service with two campaigns, only one active at a time.

## Key Files

- `server.js` — Express app, port 3004
- `index.html` — Bootstrap UI, served as static file by Express
- `package.json` — Dependencies: express, cors

## Deployment

- VPS: root@187.77.126.196, key `/root/.ssh/id_rsa_vps`
- App dir: `/opt/campaign-trigger/`
- Nginx site: `/etc/nginx/sites-available/campaign.app-cube.tech`
- SSL certs: `/etc/letsencrypt/live/campaign.app-cube.tech/`
- Cloudflare zone ID: `e53b0615682d09390656b294e036f853`

## Important: Do Not Touch Existing Services

The VPS runs multiple Docker containers and Node.js services on other ports:
- Port 3000: niscaya-antrian-app (Docker)
- Port 3001: signaling-server (Docker)
- Port 3002: kiosk-app (Docker)
- Port 3003: employee-dashboard (node)
- Port 3050: bookspace-frontend (Docker)
- Port 4000: device-dashboard-hive-app (Docker)
- Port 5173: device-dashboard-hive frontend (Docker)

Only port 3004 is free for this project.

## Existing Nginx Sites

- `app-cube.tech` → 127.0.0.1:3000
- `bookspace.app-cube.tech` → 127.0.0.1:3050
- `device-dashboard-hive-cast.com` → 127.0.0.1:5173 / 127.0.0.1:4000
- `hive-companion.web.id` → 127.0.0.1:3400
- `device.app-cube.tech` → 127.0.0.1:3002 / 127.0.0.1:3001
- `dashboard.app-cube.tech` → 127.0.0.1:3003 / 127.0.0.1:3001
- `campaign.app-cube.tech` → 127.0.0.1:3004 (this project)
