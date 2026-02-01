'use client';

import { Printer } from 'lucide-react';

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="ml-auto px-4 py-2 bg-[#296374] text-white rounded-lg hover:bg-[#0C2C55] transition-colors flex items-center"
    >
      <Printer className="w-4 h-4 mr-2" />
      Print Recipe
    </button>
  );
}
