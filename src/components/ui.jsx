import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Github,
  Instagram,
  FileText,
  Database,
  Code2,
  BarChart3,
  Wrench,
  Cloud,
  Users,
  GraduationCap,
  Sparkles,
  ChevronRight,
  Server,
} from "lucide-react";

export const Icons = {
  map: MapPin,
  phone: Phone,
  mail: Mail,
  linkedin: Linkedin,
  github: Github,
  instagram: Instagram,
  file: FileText,
  database: Database,
  code: Code2,
  bar: BarChart3,
  wrench: Wrench,
  cloud: Cloud,
  users: Users,
  cap: GraduationCap,
  sparkle: Sparkles,
  arrow: ChevronRight,
  server: Server,
};

export function SectionTitle({ title }) {
  return (
    <div className="text-center">
      <h2 className="h2">{title}</h2>
      <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-violet-600/80" />
    </div>
  );
}

export function Chip({ children }) {
  return <span className="badge">{children}</span>;
}

export function PrimaryButton({ href, icon: Icon, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="pill-btn bg-violet-600 text-white hover:bg-violet-700 shadow-soft"
    >
      {Icon ? <Icon size={18} /> : null}
      {children}
    </a>
  );
}

export function GhostButton({ href, icon: Icon, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="pill-btn bg-white text-slate-900 ring-2 ring-slate-200 hover:ring-slate-300"
    >
      {Icon ? <Icon size={18} /> : null}
      {children}
    </a>
  );
}
