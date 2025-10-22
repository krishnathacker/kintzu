# Kintzu — Investor Microsite

Production-ready Vite + React project for the investor microsite.

## Local Dev

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## One‑Click Deploy (Vercel)

1. Push this folder to a new GitHub repo.
2. In Vercel → **Add New** → **Project** → Import your repo.
3. Framework preset: **Vite** (auto-detected). Build command `npm run build`, output `dist/`.
4. After first deploy, go to **Settings → Domains** and add `kintzu.com` and `www.kintzu.com`.
5. Set up DNS at your registrar (Namecheap, Google Domains, etc.):  
   - **Apex (root) `kintzu.com`** → **A record** pointing to **76.76.21.21**.  
   - **`www.kintzu.com`** → **CNAME** to **cname.vercel-dns.com**.  
   - Remove other conflicting A/AAAA/CNAME records for the same hosts.
6. Wait for DNS to propagate (usually minutes; could take up to 24h). Set your **primary domain** in Vercel and enable **redirects** `www → apex` or vice‑versa.

> Tip: If you'd rather not manage external DNS, switch nameservers to Vercel DNS and add the records there.

## Netlify (Alternative)

- Build command: `npm run build`  
- Publish dir: `dist/`  
- For external DNS: set **Apex** to Netlify's apex load balancer or ALIAS/ANAME to `apex-loadbalancer.netlify.com`, and CNAME `www` to the assigned Netlify hostname. See Netlify docs.

## Stack

- React 18 + Vite
- TailwindCSS 3
- Framer Motion, Recharts, lucide-react
