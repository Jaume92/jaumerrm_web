"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
export default function SiteNav(){
  const pathname=usePathname();const [open,setOpen]=useState(false);
  return <><a href="#main-content" className="skip-link">Saltar al contenido</a><header className="site-header"><div className="shell nav-inner"><Link href="/" className="wordmark" onClick={()=>setOpen(false)} aria-label="Jaume RRM — Inicio">jaume<span>rrm</span><b>.</b></Link><button className="menu-toggle" aria-expanded={open} aria-controls="site-menu" onClick={()=>setOpen(!open)}>{open?"Cerrar ✕":"Menú ☰"}</button><nav id="site-menu" className={open?"site-menu open":"site-menu"} aria-label="Navegación principal">{[{href:"/",label:"Inicio"},{href:"/projects",label:"Proyectos"},{href:"/cv",label:"Trayectoria"},{href:"/dam",label:"Formación"}].map(item=><Link key={item.href} href={item.href} aria-current={pathname===item.href?"page":undefined} onClick={()=>setOpen(false)}>{item.label}</Link>)}<Link href="/contact" className="nav-contact" onClick={()=>setOpen(false)}>Hablemos <span aria-hidden="true">↗</span></Link></nav></div></header></>;
}
