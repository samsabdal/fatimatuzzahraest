import React from 'react';
import { X, MessageCircle, Heart } from 'lucide-react';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
  whatsappNumber: string;
}

export const DonationModal: React.FC<DonationModalProps> = ({ isOpen, onClose, whatsappNumber }) => {
  if (!isOpen) return null;

  const handleDonateNow = () => {
    window.location.href = "upi://pay?pa=qr917978796166-0228@unionbankofindia&pn=FatimaTuzZahraTrust&cu=INR";
  };

  const handleWhatsappRedirect = () => {
    const text = encodeURIComponent("Assalamu Alaikum, I have sent a donation. Here is the screenshot.");
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-emerald-700 p-4 flex justify-between items-center text-white">
          <h3 className="text-xl font-bold font-serif">Support Our Cause</h3>
          <button onClick={onClose} className="hover:bg-emerald-600 p-1 rounded-full transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col items-center space-y-6">
          <p className="text-center text-gray-600 text-sm">
            Your contribution empowers underprivileged communities through education.
          </p>

          <div className="bg-white p-2 border border-gray-200 rounded-lg shadow-inner">
             <img 
              src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=upi://pay?pa=qr917978796166-0228@unionbankofindia&pn=FatimaTuzZahraTrust&cu=INR" 
              alt="Donation QR Code" 
              className="w-40 h-40"
            />
          </div>

          <div className="w-full bg-emerald-50 p-4 rounded-lg border border-emerald-100 text-center">
            <h4 className="text-emerald-800 font-bold mb-2">Bank Details</h4>
            <div className="text-sm text-gray-700 space-y-1">
              <p><span className="font-semibold">Bank Name:</span> UNION BANK OF INDIA</p>
              <p><span className="font-semibold">A/C No:</span> 718201010050225</p>
              <p><span className="font-semibold">IFSC:</span> UBIN0571822</p>
            </div>
          </div>

          <button 
            onClick={handleDonateNow}
            className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-lg shadow-amber-200"
          >
            <Heart size={20} className="fill-current" />
            Donate Now
          </button>

          <button 
            onClick={handleWhatsappRedirect}
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-lg shadow-emerald-200"
          >
            <MessageCircle size={20} />
            Send Screenshot on WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};