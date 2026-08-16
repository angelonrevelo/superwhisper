import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { DownloadModal } from "./DownloadModal";

type Ctx = { openDownload: () => void };
const DownloadCtx = createContext<Ctx>({ openDownload: () => {} });

export function useDownload() {
  return useContext(DownloadCtx);
}

export function DownloadProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const value = useMemo(() => ({ openDownload: () => setOpen(true) }), []);
  return (
    <DownloadCtx.Provider value={value}>
      {children}
      <DownloadModal open={open} onClose={() => setOpen(false)} />
    </DownloadCtx.Provider>
  );
}
