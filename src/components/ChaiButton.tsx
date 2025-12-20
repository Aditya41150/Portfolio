import { Coffee } from "lucide-react"; // Note: Lucide uses 'Coffee' for general hot drinks, but we'll label it Chai

export default function ChaiButton() {
  return (
    <a
      href="https://buymeachai.ezee.li/Aditya41150" // You can keep the same link
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-40 flex items-center gap-2 bg-[#D2691E] text-white px-5 py-3 rounded-full font-bold shadow-xl hover:scale-110 transition-transform active:scale-95 group border border-[#8B4513]"
    >
      <Coffee className="group-hover:-rotate-12 transition-transform" size={20} />
      <span className="hidden md:inline text-sm">Buy me a chai</span>
    </a>
  );
}