import { useRef, useState, type FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { X, Send, Loader2 } from 'lucide-react';


interface ContactProps {
  onClose: () => void;
}

export default function Contact({ onClose }: ContactProps) {
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      alert('Email service is not configured yet.');
      setIsSending(false);
      return;
    }

    if (form.current) {
      emailjs.sendForm(serviceId, templateId, form.current, publicKey)
        .then(() => {
          alert('Message sent successfully!');
          onClose();
        })
        .catch((err: { text?: string }) => {
          alert('Failed to send: ' + (err.text ?? 'Please try again later.'));
        })
        .finally(() => setIsSending(false));
    }
  };

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center px-4 py-8 bg-black/80 backdrop-blur-md">
      <div className="bg-neutral-900 border border-neutral-800 w-full max-w-md sm:max-w-lg rounded-2xl shadow-2xl relative overflow-hidden max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-neutral-400 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        <div className="p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">Hire Me</h2>
          <p className="text-neutral-400 mb-6 text-xs sm:text-sm">Fill out the form below and I'll get back to you shortly.</p>

          <form ref={form} onSubmit={sendEmail} className="space-y-3 sm:space-y-4">
            <div>
              <input 
                name="user_name" 
                type="text" 
                placeholder="Your Name" 
                required 
                className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 text-white outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
            </div>
            <div>
              <input 
                name="user_email" 
                type="email" 
                placeholder="Email Address" 
                required 
                className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 text-white outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
            </div>
            <div>
              <textarea 
                name="message" 
                rows={4} 
                placeholder="How can I help you?" 
                required 
                className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 text-white outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              disabled={isSending}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2"
            >
              {isSending ? (
                <Loader2 className="animate-spin" size={20} />
              ) : (
                <>Send Message <Send size={18} /></>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}