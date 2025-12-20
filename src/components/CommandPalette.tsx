import { Command } from "cmdk";
import { useEffect, useState } from "react";
import { Terminal, Github, Briefcase, Mail, Code2, Search } from "lucide-react";

interface CommandPaletteProps {
  openContact: () => void;
}

const GitHubStreak = () => {
  const username = "Aditya41150";
  return (
    <div className="mx-2 mb-4 p-4 bg-neutral-950 border border-neutral-800 rounded-xl space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest">GitHub Activity</span>
        <span className="flex h-2 w-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
      </div>
      <img 
        src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=transparent&title_color=ffffff&text_color=a3a3a3&icon_color=3b82f6&hide_border=true&bg_color=00000000`} 
        alt="GitHub Stats"
        className="w-full h-auto opacity-90"
      />
    </div>
  );
};

export default function CommandPalette({ openContact }: CommandPaletteProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const navigateTo = (id: string) => {
    setOpen(false);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  // This handles closing the palette and opening the contact form
  const handleContactSelect = () => {
    setOpen(false);
    openContact();
  };

  return (
    <>
      <button 
        onClick={() => setOpen(true)}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 hidden md:flex items-center gap-3 px-4 py-2 rounded-full border border-neutral-800 bg-neutral-950/80 backdrop-blur-md text-neutral-400 z-40 hover:border-neutral-600 transition-all group"
      >
        <Search size={14} className="group-hover:text-blue-500" />
        <span className="text-xs font-medium">Quick Search</span>
        <div className="flex gap-1 ml-2">
          <kbd className="text-[10px] bg-neutral-800 px-1.5 py-0.5 rounded border border-neutral-700 font-mono">Ctrl</kbd>
          <kbd className="text-[10px] bg-neutral-800 px-1.5 py-0.5 rounded border border-neutral-700 font-mono">K</kbd>
        </div>
      </button>

      <Command.Dialog
        open={open}
        onOpenChange={setOpen}
        className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4 bg-black/80 backdrop-blur-sm"
      >
        <div className="w-full max-w-[600px] bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden shadow-2xl">
          <div className="flex items-center border-b border-neutral-800 px-4 py-4">
            <Terminal className="mr-3 text-neutral-500" size={20} />
            <Command.Input
              placeholder="Search projects, skills, or run commands..."
              className="w-full bg-transparent outline-none text-neutral-200 placeholder-neutral-600 text-sm"
            />
          </div>

          <Command.List className="max-h-[400px] overflow-y-auto pb-2">
            <Command.Empty className="py-8 text-center text-sm text-neutral-500 font-mono">No results found.</Command.Empty>

            <div className="pt-4">
              <GitHubStreak />
            </div>

            <Command.Group heading="Navigation" className="px-3 pb-2 text-[10px] font-bold text-neutral-600 uppercase tracking-widest">
              <Command.Item onSelect={() => navigateTo("projects")} className="flex items-center gap-3 p-3 rounded-lg text-sm text-neutral-300 hover:bg-neutral-800 aria-selected:bg-neutral-800 cursor-pointer">
                <Briefcase size={16} className="text-blue-500" /> View Projects
              </Command.Item>
              <Command.Item onSelect={() => navigateTo("skills")} className="flex items-center gap-3 p-3 rounded-lg text-sm text-neutral-300 hover:bg-neutral-800 aria-selected:bg-neutral-800 cursor-pointer">
                <Code2 size={16} className="text-blue-500" /> Technical Skills
              </Command.Item>
            </Command.Group>

            <Command.Group heading="Connect" className="px-3 pb-2 mt-2 text-[10px] font-bold text-neutral-600 uppercase tracking-widest">
              <Command.Item onSelect={() => window.open("https://github.com/Aditya41150", "_blank")} className="flex items-center gap-3 p-3 rounded-lg text-sm text-neutral-300 hover:bg-neutral-800 aria-selected:bg-neutral-800 cursor-pointer">
                <Github size={16} className="text-neutral-400" /> GitHub Profile
              </Command.Item>
              <Command.Item onSelect={handleContactSelect} className="flex items-center gap-3 p-3 rounded-lg text-sm text-neutral-300 hover:bg-neutral-800 aria-selected:bg-neutral-800 cursor-pointer">
                <Mail size={16} className="text-neutral-400" /> Send Message
              </Command.Item>
            </Command.Group>
          </Command.List>
        </div>
      </Command.Dialog>
    </>
  );
}