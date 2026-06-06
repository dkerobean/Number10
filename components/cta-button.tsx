import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type CtaButtonProps = {
  href: string;
  children: ReactNode;
  dark?: boolean;
  className?: string;
};

export function CtaButton({ href, children, dark = false, className }: CtaButtonProps) {
  return (
    <Link
      href={href}
      className={cn("cta-button", dark && "cta-button-dark", className)}
      aria-label={typeof children === "string" ? children : undefined}
    >
      <span className="cta-text">
        <span>{children}</span>
        <span aria-hidden="true">{children}</span>
      </span>
      <ArrowUpRight size={18} strokeWidth={1.8} />
    </Link>
  );
}
