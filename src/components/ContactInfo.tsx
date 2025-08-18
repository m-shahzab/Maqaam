import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";

export function ContactInfo({
  className,
  iconColor = "text-teal-600",
}: {
  className?: string;
  iconColor?: string;
}) {
  return (
    <div className={`space-y-6 ${className}`}>
      <div className="flex items-center gap-4">
        <Phone className={`w-6 h-6 ${iconColor}`} />
        <span className="text-lg">+971 54 23 90305</span>
      </div>
      <div className="flex items-center gap-4">
        <Mail className={`w-6 h-6 ${iconColor}`} />
        <span className="text-lg">maqaamalamer@gmail.com</span>
      </div>
      <div className="flex items-center gap-4">
        <MapPin className={`w-6 h-6 ${iconColor}`} />
        <span className="text-lg">
          AL khabeesi building plot 128-246, Dubai, UAE
        </span>
      </div>
    </div>
  );
}
