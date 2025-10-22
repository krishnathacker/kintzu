
import React, { useEffect, useState } from "react";

// Soft password gate (client-side).
// IMPORTANT: This is not cryptographically secure. Use Vercel/Netlify password protection for stronger gating.
const PASS_HASH = "bffce0d4ebb82f8ed8a320815ae80faf874164f6d59d10ff8adf9eb04f95b87c"; // sha256 of the passcode (default is sha256('kintzu2025'))
const STORAGE_KEY = "kintzu_gate_ok";

async function sha256Hex (text) {
  const enc = new TextEncoder().encode(text);
  const buf = await crypto.subtle.digest("SHA-256", enc);
  const arr = Array.from(new Uint8Array(buf));
  return arr.map(b => b.toString(16).padStart(2,"0")).join("");
}

export default function AccessGate({ children }) {
  const [ok, setOk] = useState(false);
  const [code, setCode] = useState("");
  const [err, setErr] = useState("");

  useEffect(() => {
    const flag = localStorage.getItem(STORAGE_KEY);
    if (flag === "1") setOk(true);
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    setErr("");
    const h = await sha256Hex(code.trim());
    if (h === PASS_HASH) {
      localStorage.setItem(STORAGE_KEY, "1");
      setOk(true);
    } else {
      setErr("Incorrect code.");
    }
  };

  if (ok) return <>{children}</>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-[linear-gradient(180deg,#FDFBF8_0%,#F8E6D3_100%)]">
      <div className="w-full max-w-sm rounded-2xl border border-amber-200/60 bg-white/80 p-6 shadow-sm">
        <h1 className="text-xl font-semibold text-slate-800">Kintzu — Investor Access</h1>
        <p className="mt-2 text-sm text-slate-600">Enter the access code to view this microsite.</p>
        <form onSubmit={submit} className="mt-4 space-y-3">
          <input
            autoFocus
            type="password"
            placeholder="Access code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-800 outline-none focus:ring-2 focus:ring-amber-400"
          />
          <button type="submit" className="w-full rounded-2xl bg-amber-400 hover:bg-amber-500 text-white py-2 font-medium">Unlock</button>
          {err && <p className="text-sm text-red-600">{err}</p>}
        </form>
        <p className="mt-3 text-xs text-slate-500">Tip: Once unlocked, your browser remembers until you clear site data.</p>
      </div>
    </div>
  );
}
