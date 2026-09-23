# Campaign Trigger

Simple campaign activation service with API endpoints and Bootstrap UI.

## Overview

Two campaign buttons that trigger an endpoint. Only one campaign can be active at a time.

## Endpoints

| Method | Path | Body | Response |
|--------|------|------|----------|
| GET | `/api/campaign` | — | `{"campaign1": bool, "campaign2": bool}` |
| POST | `/api/campaign/:id` | — | `{"campaign1": bool, "campaign2": bool}` |

Only one of `campaign1` or `campaign2` is `true` at a time.

## Quick Start

```bash
npm install
node server.js
```

Open `http://localhost:3004` in a browser.

## Project Structure

```
.
├── server.js        # Express backend (port 3004)
├── index.html       # Bootstrap UI with 2 campaign buttons
├── package.json     # Dependencies: express, cors
└── .gitignore       # node_modules, package-lock.json
```

## Production Deployment

- **VPS**: `187.77.126.196` (root via `/root/.ssh/id_rsa_vps`)
- **App URL**: `https://campaign.app-cube.tech`
- **Nginx**: `/etc/nginx/sites-available/campaign.app-cube.tech`
- **App location**: `/opt/campaign-trigger/`
- **SSL**: Let's Encrypt via Certbot
- **DNS**: Cloudflare (zone ID: `e53b0615682d09390656b294e036f853`)
- **GitHub**: `https://github.com/priyayids/campaignTrigger.git`

## Deployment Notes

- Node.js app runs on port 3004
- Nginx proxies `campaign.app-cube.tech:443` → `127.0.0.1:3004`
- Auto-renew via certbot scheduled task
- Cloudflare DNS proxied (orange cloud)

## Credentials

- Cloudflare API token stored in `/var/local/.personalEnv`
- GitHub PAT stored in `/var/local/.personalEnv`
- VPS SSH: `root@187.77.126.196` with key `/root/.ssh/id_rsa_vps`
