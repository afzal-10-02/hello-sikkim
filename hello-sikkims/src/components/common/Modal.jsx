import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEscapeKey } from "../../hooks/useEscapeKey";

export default function Modal({ open, onClose, eyebrow, title, children }) {
  useEscapeKey(onClose, open);
  return (
    <AnimatePresence>
      {open && (
        <motion.div className="fixed inset-0 z-[80] flex items-end justify-center bg-black/70 p-0 backdrop-blur-sm sm:items-center sm:p-5"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={onClose}>
          <motion.div role="dialog" aria-modal="true" aria-labelledby="modal-title"
            initial={{ y: 48, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 48, opacity: 0 }}
            transition={{ type: "spring", damping: 26 }} onMouseDown={(e) => e.stopPropagation()}
            className="max-h-[88vh] w-full max-w-xl overflow-y-auto rounded-t-2xl border border-slate-700 bg-[#172337] p-5 shadow-2xl sm:rounded-2xl sm:p-7">
            <div className="flex items-start justify-between gap-4">
              <div>{eyebrow && <p className="eyebrow">{eyebrow}</p>}<h3 id="modal-title" className="mt-2 text-2xl font-bold text-white">{title}</h3></div>
              <button onClick={onClose} aria-label="Close dialog" className="rounded-lg border border-slate-700 p-2 text-slate-400 hover:text-white"><X size={18} /></button>
            </div>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}