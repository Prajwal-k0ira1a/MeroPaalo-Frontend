export default function TokenActions() {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 py-4">
      {/* Help text */}
      <div className="flex items-center gap-4 text-slate-400 max-w-sm">
        <div className="w-8 h-8 rounded-full border border-slate-100 flex items-center justify-center shrink-0">
          <InfoIcon />
        </div>
        <p className="text-[10px] font-bold text-slate-400/80 leading-tight uppercase tracking-tight font-display">
          Please proceed to the lobby. You will be notified when your turn is
          "Next Up".
        </p>
      </div>
    </div>
  );
}

function InfoIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  );
}
