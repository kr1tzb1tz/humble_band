# Humble Band

Official website for Humble Band.

## Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build
```

## Deployment

### Quick Deploy to Digital Ocean

```bash
# Build the site
pnpm build

# Upload to droplet (rsync - faster for updates)
rsync -avz --delete out/ humble_band_cloud:/var/www/humble.band/

# Set permissions
ssh humble_band_cloud "chown -R www-data:www-data /var/www/humble.band && chmod -R 755 /var/www/humble.band"
```

### Initial Server Setup

```bash
# Install nginx and certbot
apt update && apt install nginx certbot python3-certbot-nginx -y

# Create site directory
mkdir -p /var/www/humble.band

# Upload nginx config
scp nginx.conf humble_band_cloud:/etc/nginx/sites-available/humble.band

# Enable site
ssh humble_band_cloud "ln -s /etc/nginx/sites-available/humble.band /etc/nginx/sites-enabled/ && nginx -t && systemctl reload nginx"

# Setup firewall (includes SSL)
ssh humble_band_cloud "ufw allow ssh && ufw allow 'Nginx Full' && ufw enable"

# Get SSL certificate
ssh humble_band_cloud "certbot --nginx -d humble.band -d www.humble.band"
```

## Tech Stack

- Next.js 15 (static export)
- React 19
- TypeScript
- Tailwind CSS
- shadcn/ui components
- Nginx hosting