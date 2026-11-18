import { useEffect, useState } from "react";

/**
 * Countdown persistente via localStorage.
 * Cria um deadline pessoal de 47 minutos na primeira visita.
 * Se o timer expirar, reinicia automaticamente (simula novo lote).
 */
const STORAGE_KEY = "ia-pro-supreme-deadline";
const DURATION_MS = 47 * 60 * 1000; // 47 minutos

function getDeadline(): number {
  if (typeof window === "undefined") return Date.now() + DURATION_MS;
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    const parsed = Number(stored);
    if (parsed > Date.now()) return parsed;
  }
  const deadline = Date.now() + DURATION_MS;
  localStorage.setItem(STORAGE_KEY, String(deadline));
  return deadline;
}

function formatTime(ms: number) {
  if (ms <= 0) return { m: "00", s: "00" };
  const totalSeconds = Math.floor(ms / 1000);
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return {
    m: String(m).padStart(2, "0"),
    s: String(s).padStart(2, "0"),
  };
}

export function CountdownTimer() {
  const [deadline] = useState(getDeadline);
  const [remaining, setRemaining] = useState(() =>
    Math.max(0, deadline - Date.now()),
  );

  useEffect(() => {
    const id = setInterval(() => {
      const left = Math.max(0, deadline - Date.now());
      setRemaining(left);
      if (left <= 0) {
        // Reinicia o ciclo automaticamente
        const newDeadline = Date.now() + DURATION_MS;
        localStorage.setItem(STORAGE_KEY, String(newDeadline));
        setRemaining(DURATION_MS);
      }
    }, 1000);
    return () => clearInterval(id);
  }, [deadline]);

  const { m, s } = formatTime(remaining);

  return (
    <span className="inline-flex items-center gap-1 font-mono text-sm font-bold text-gold">
      <span className="countdown-digit">{m}</span>
      <span className="text-gold/60">:</span>
      <span className="countdown-digit">{s}</span>
    </span>
  );
}