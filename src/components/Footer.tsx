import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 dark:bg-neutral-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="text-xl font-bold">Asif Mahmud</span>
            </div>
            <p className="text-neutral-400 mb-6 max-w-md">
              একজন ক্রিয়েটিভ প্রফেশনাল যিনি ডিজাইন, ডেভেলপমেন্ট এবং ডিজিটাল মার্কেটিংয়ে বিশেষজ্ঞ। 
              আপনার ব্র্যান্ডকে ডিজিটাল জগতে এগিয়ে নিয়ে যাওয়ার জন্য প্রস্তুত।
            </p>
            <div className="flex space-x-4">
              <Link href="/dashboard" className="text-neutral-400 hover:text-white transition-colors">
                <Settings className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">দ্রুত লিংক</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-neutral-400 hover:text-white transition-colors">
                  হোম
                </Link>
              </li>
              <li>
                <Link href="/contents" className="text-neutral-400 hover:text-white transition-colors">
                  আমার কনটেন্ট
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-neutral-400 hover:text-white transition-colors">
                  যোগাযোগ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">যোগাযোগ</h3>
            <ul className="space-y-2 text-neutral-400">
              <li>Email: asif@example.com</li>
              <li>Phone: +880 1234-567890</li>
              <li>Dhaka, Bangladesh</li>
            </ul>
            <div className="mt-4">
              <Button asChild variant="outline" size="sm">
                <Link href="/dashboard">
                  <Settings className="h-4 w-4 mr-2" />
                  লগইন
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-400 text-sm">
            © 2024 Asif Mahmud. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-neutral-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-neutral-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 