"use client";

import { useState } from "react";
import { useScrollY } from "@/lib/hooks";
import Navbar   from "@/components/Navbar";
import Hero     from "@/components/Hero";
import About    from "@/components/About";
import Programs from "@/components/Programs";
import Members  from "@/components/Members";
import Contact  from "@/components/Contact";
import Footer   from "@/components/Footer";

export default function AlumniWebsite() {
  const [dark, setDark] = useState(false);
  const scrollY = useScrollY();

  return (
    <div style={{ fontFamily: "'Segoe UI',system-ui,sans-serif", minHeight: "100vh" }}>
      <Navbar   dark={dark} onToggle={() => setDark((p) => !p)} scrollY={scrollY} />
      <Hero     dark={dark} />
      <About    dark={dark} />
      <Programs dark={dark} />
      <Members  dark={dark} />
      <Contact  dark={dark} />
      <Footer   dark={dark} />
    </div>
  );
}
