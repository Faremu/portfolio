"use client";
import "lenis/dist/lenis.css";
import { ReactLenis, useLenis } from "lenis/react";
import { ReactNode } from "react";

export default function LenisWrapper({ children }: { children: ReactNode }) {
  const lenis = useLenis((lenis) => {
    console.log(lenis.scroll);
  });

  return <ReactLenis root>{children}</ReactLenis>;
}
