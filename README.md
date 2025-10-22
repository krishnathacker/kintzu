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


---

## Privacy‑friendly Analytics (Plausible)
- The site includes the Plausible script in `index.html`:
  ```html
  <script defer data-domain="kintzu.com" src="https://plausible.io/js/script.js"></script>
  ```
- After you create your site in Plausible, set the domain to `kintzu.com` (and `www.kintzu.com` if needed).

## Soft Password Gate
- Implemented in `src/AccessGate.jsx`. Default passcode is **kintzu2025**.
- To change the code, replace the hash in `PASS_HASH`:
  1. Pick a new passcode, e.g. `supersecret`.
  2. Generate SHA‑256 hex in **any browser console**:
     ```js
     async function h(s){const e=new TextEncoder().encode(s);const d=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(d)).map(b=>b.toString(16).padStart(2,"0")).join("")}; h("supersecret")
     ```
  3. Replace `PASS_HASH` in `AccessGate.jsx` with that hex string and redeploy.

> Note: This is a **soft** gate (client-side). For stronger protection, use platform features:
> - **Vercel**: Edge Middleware to enforce HTTP Basic Auth.
> - **Netlify**: `_headers` rules or Basic Auth on paths.
