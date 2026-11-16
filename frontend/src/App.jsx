import React, { useMemo, useRef, useState } from "react";
import {
  ArrowRight, Check, ChevronDown, FileImage, FileText, Files, Menu,
  ShieldCheck, Upload, X, Zap, Scissors, Minimize2, Image as ImageIcon, FilePlus2,
  FileOutput, FileInput, RotateCw, LockKeyhole, UnlockKeyhole, FileSearch,
  FileSpreadsheet, FileType, Layers, ScanText, Crop, ArrowLeft, Search, SlidersHorizontal
} from "lucide-react";

const tools = [
  { name: "JPG to PDF", desc: "Turn one or many images into a single PDF.", tag: "JPG", tone: "purple", icon: ImageIcon },
  { name: "PDF to JPG", desc: "Save every page as a high-quality image.", tag: "PDF", tone: "purple", icon: FileImage },
  { name: "Merge PDF", desc: "Combine several PDFs in the order you choose.", tag: "A+B", tone: "red", icon: Files },
  { name: "Compress PDF", desc: "Shrink file size while keeping it readable.", tag: "MB↓", tone: "red", icon: Minimize2 },
  { name: "Split PDF", desc: "Extract pages or split a file into parts.", tag: "A|B", tone: "red", icon: Scissors },
  { name: "PDF to Word", desc: "Get an editable Word document from any PDF.", tag: "DOC", tone: "purple", icon: FileText },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [convertOpen, setConvertOpen] = useState(false);
  const closeMenus = () => { setMegaOpen(false); setConvertOpen(false); };
  return <header className="header">
    <a className="logo" href="#home" onClick={closeMenus}><span>PDF</span>Kit</a>
    <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
      {menuOpen ? <X size={23}/> : <Menu size={23}/>}
    </button>
    <nav className={menuOpen ? "nav nav-open" : "nav"}>
      <a className="nav-strong" href="#merge-pdf">Merge PDF</a>
      <a className="nav-strong" href="#split-pdf">Split PDF</a>
      <a className="nav-strong" href="#compress-pdf">Compress PDF</a>
      <div className="nav-dropdown-wrap">
        <button className={convertOpen ? "nav-trigger nav-trigger-active" : "nav-trigger"} onClick={() => {setConvertOpen(!convertOpen);setMegaOpen(false);}}>
          Convert PDF <ChevronDown size={16}/>
        </button>
        {convertOpen && <div className="small-nav-menu">
          <a href="#jpg-to-pdf" onClick={closeMenus}><ImageIcon/> JPG to PDF</a>
          <a href="#pdf-to-jpg" onClick={closeMenus}><FileImage/> PDF to JPG</a>
          <a href="#word-to-pdf" onClick={closeMenus}><FileType/> Word to PDF</a>
          <a href="#pdf-to-word" onClick={closeMenus}><FileText/> PDF to Word</a>
        </div>}
      </div>
      <a className="nav-all-tools" href="#all-tools" onClick={closeMenus}>All PDF tools <ChevronDown size={16}/></a>
    </nav>
    <div className="auth-links">
      <a href="#signin">Log in</a>
      <a className="signup" href="#signup">Sign up</a>
      <button className={megaOpen ? "app-grid-button is-open" : "app-grid-button"} aria-label="Open PDFKit menu" onClick={() => {setMegaOpen(!megaOpen);setConvertOpen(false);}}>
        <span/><span/><span/><span/><span/><span/><span/><span/><span/>
      </button>
    </div>
    {megaOpen && <div className="mega-menu">
      <div className="mega-column">
        <span className="mega-kicker">PDF TOOLS</span>
        <a href="#merge-pdf" onClick={closeMenus}><span className="mega-icon rose"><Files/></span><span><b>Merge PDF</b><small>Combine multiple files into one</small></span></a>
        <a href="#split-pdf" onClick={closeMenus}><span className="mega-icon"><Scissors/></span><span><b>Split PDF</b><small>Extract pages in a few clicks</small></span></a>
        <a href="#compress-pdf" onClick={closeMenus}><span className="mega-icon"><Minimize2/></span><span><b>Compress PDF</b><small>Reduce file size for sharing</small></span></a>
      </div>
      <div className="mega-column">
        <span className="mega-kicker">CONVERT & EDIT</span>
        <a href="#jpg-to-pdf" onClick={closeMenus}><span className="mega-icon"><ImageIcon/></span><span><b>JPG to PDF</b><small>Turn images into a PDF</small></span></a>
        <a href="#pdf-to-word" onClick={closeMenus}><span className="mega-icon"><FileText/></span><span><b>PDF to Word</b><small>Make documents editable</small></span></a>
        <a href="#all-tools" onClick={closeMenus}><span className="mega-icon"><Layers/></span><span><b>Explore all tools</b><small>Browse the complete tool library</small></span></a>
      </div>
      <div className="mega-side">
        <span className="mega-kicker">PDFKIT</span>
        <a href="#pricing" onClick={closeMenus}>Pricing <ArrowRight/></a>
        <a href="#security" onClick={closeMenus}>Security <ArrowRight/></a>
        <a href="#how" onClick={closeMenus}>How it works <ArrowRight/></a>
        <a href="#faq" onClick={closeMenus}>Help center <ArrowRight/></a>
        <div className="mega-note"><ShieldCheck/><span><b>Your files, your control</b><small>Simple tools with privacy in mind.</small></span></div>
      </div>
    </div>}
  </header>;
}

function Hero() {
  const fileRef = useRef(null);
  const [fileName, setFileName] = useState("");
  const chooseFile = (e) => {
    const file = e.target.files?.[0];
    if (file) setFileName(file.name);
  };
  return <section className="hero container">
    <div className="hero-copy">
      <span className="eyebrow">All-in-one PDF and image tools</span>
      <h1>Every PDF tool you need, <span>in one place</span></h1>
      <p>Convert, merge, split, compress and protect PDFs and images. Free to start, with nothing to install.</p>
      <div className="hero-actions">
        <button className="btn btn-primary" onClick={() => fileRef.current?.click()}>
          <Upload size={16}/> Select JPG images
        </button>
        <a className="btn btn-light" href="#tools">Browse all tools</a>
        <input ref={fileRef} type="file" accept="image/jpeg,image/png" hidden onChange={chooseFile}/>
      </div>
      {fileName && <p className="selected-file"><Check size={15}/> Selected: {fileName}</p>}
      <div className="trust-row"><span>No sign-up needed</span><span>Works on any device</span><span>Simple options</span></div>
    </div>
    <div className="hero-art" aria-label="PDF and image illustration">
      <div className="art-sheet sheet-back"><span className="pdf-pill">PDF</span><i/><i/><i/><b/></div>
      <div className="art-sheet sheet-front"><span className="pdf-pill">PDF</span><i/><i/><i/><b/></div>
      <div className="art-image"><ImageIcon size={56}/></div>
      <div className="art-check"><Check size={22}/></div>
      <div className="art-dots">········</div>
    </div>
    <div className="file-types">
      <small>WORKS WITH THE FILES YOU USE</small>
      <div>{["PDF","JPG","PNG","WORD","EXCEL","POWERPOINT","HTML"].map(x=><span key={x}>{x}</span>)}</div>
    </div>
  </section>;
}

function ToolCard({tool}) {
  const Icon = tool.icon;
  return <a className="tool-card" href={`#${tool.name.toLowerCase().replaceAll(" ","-")}`}>
    <span className={`tool-tag ${tool.tone}`}><Icon size={15}/><b>{tool.tag}</b></span>
    <strong>{tool.name}</strong>
    <p>{tool.desc}</p>
  </a>;
}

function PopularTools() {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => tools.filter(t => t.name.toLowerCase().includes(query.toLowerCase())), [query]);
  return <section className="section container" id="tools">
    <div className="section-heading">
      <div><h2>Popular tools</h2><p>Start with the tools people reach for most.</p></div>
      <a className="text-link" href="#all-tools">View all tools <ArrowRight size={15}/></a>
    </div>
    <div className="tool-search"><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Find a tool..." /></div>
    <div className="tools-grid">
      {filtered.map(t=><ToolCard key={t.name} tool={t}/>)}
      {filtered.length === 0 && <p className="empty">No tools found. Try another search.</p>}
    </div>
  </section>;
}

const allTools = [
  { name: "JPG to PDF", desc: "Convert JPG and PNG images into a PDF document.", category: "Convert", icon: ImageIcon, tone: "purple", status: "Coming soon" },
  { name: "PDF to JPG", desc: "Turn PDF pages into downloadable JPG images.", category: "Convert", icon: FileImage, tone: "purple", status: "Coming soon" },
  { name: "Word to PDF", desc: "Convert Word documents into PDF format.", category: "Convert", icon: FileType, tone: "purple", status: "Coming soon" },
  { name: "PDF to Word", desc: "Make PDF content editable in a Word document.", category: "Convert", icon: FileText, tone: "purple", status: "Coming soon" },
  { name: "Excel to PDF", desc: "Save spreadsheets as easy-to-share PDFs.", category: "Convert", icon: FileSpreadsheet, tone: "purple", status: "Coming soon" },
  { name: "PDF to Excel", desc: "Export PDF tables into spreadsheet format.", category: "Convert", icon: FileOutput, tone: "purple", status: "Coming soon" },
  { name: "Merge PDF", desc: "Combine multiple PDF files into one document.", category: "Organize", icon: Files, tone: "red", status: "Coming soon" },
  { name: "Split PDF", desc: "Separate selected pages into individual files.", category: "Organize", icon: Scissors, tone: "red", status: "Coming soon" },
  { name: "Rotate PDF", desc: "Rotate PDF pages to the correct orientation.", category: "Organize", icon: RotateCw, tone: "red", status: "Coming soon" },
  { name: "Organize PDF", desc: "Reorder, remove and arrange PDF pages.", category: "Organize", icon: Layers, tone: "red", status: "Coming soon" },
  { name: "Compress PDF", desc: "Reduce PDF file size for easier sharing.", category: "Optimize", icon: Minimize2, tone: "red", status: "Coming soon" },
  { name: "Protect PDF", desc: "Add a password to help protect a PDF file.", category: "Security", icon: LockKeyhole, tone: "purple", status: "Coming soon" },
  { name: "Unlock PDF", desc: "Remove PDF restrictions when you have permission.", category: "Security", icon: UnlockKeyhole, tone: "purple", status: "Coming soon" },
  { name: "Edit PDF", desc: "Add text and simple annotations to a PDF.", category: "Edit", icon: FilePlus2, tone: "purple", status: "Coming soon" },
  { name: "Sign PDF", desc: "Place a signature on your PDF document.", category: "Edit", icon: FileInput, tone: "purple", status: "Coming soon" },
  { name: "OCR PDF", desc: "Recognize text in scanned PDF documents.", category: "Convert", icon: ScanText, tone: "purple", status: "Coming soon" },
  { name: "Repair PDF", desc: "Try to recover a damaged PDF document.", category: "Optimize", icon: FileSearch, tone: "red", status: "Coming soon" },
  { name: "Crop PDF", desc: "Trim page margins and visible page area.", category: "Edit", icon: Crop, tone: "red", status: "Coming soon" },
];

function AllToolsPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All tools");
  const categories = ["All tools", "Convert", "Organize", "Optimize", "Edit", "Security"];
  const filtered = useMemo(() => allTools.filter(tool => {
    const matchesCategory = category === "All tools" || tool.category === category;
    const matchesQuery = `${tool.name} ${tool.desc} ${tool.category}`.toLowerCase().includes(query.toLowerCase());
    return matchesCategory && matchesQuery;
  }), [query, category]);
  return <main className="all-tools-page">
    <section className="all-tools-hero"><div className="container">
      <a className="back-home" href="#home"><ArrowLeft size={15}/> Back to home</a>
      <span className="eyebrow">THE PDFKIT TOOLBOX</span>
      <h1>Everything you need to work with <span>PDFs.</span></h1>
      <p>Choose a tool, upload your document and get the job done. All your everyday PDF tasks, together in one place.</p>
      <div className="all-tools-search"><Search size={18}/><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search PDF tools..." aria-label="Search PDF tools"/><span>{filtered.length} tools</span></div>
    </div></section>
    <section className="container all-tools-content">
      <div className="category-row"><span><SlidersHorizontal size={18}/> Browse by category</span>{categories.map(item => <button key={item} className={category===item?"category-chip active":"category-chip"} onClick={()=>setCategory(item)}>{item}</button>)}</div>
      <div className="all-tools-heading"><div><h2>{category === "All tools" ? "Explore PDF tools" : `${category} tools`}</h2><p>Pick the tool that matches what you want to do.</p></div><span className="result-count">{filtered.length} tools</span></div>
      <div className="all-tools-grid">{filtered.map(tool => { const Icon = tool.icon; return <article className="all-tool-card" key={tool.name}>
        <div className="all-tool-card-top"><span className={`tool-tag ${tool.tone}`}><Icon size={19}/></span><span className={tool.status==="Available"?"tool-status ready":"tool-status"}>{tool.status}</span></div>
        <h3>{tool.name}</h3><p>{tool.desc}</p><div className="all-tool-card-bottom"><small>{tool.category}</small><span className="soon-label">Coming soon</span></div>
      </article>; })}</div>
      {filtered.length===0 && <div className="no-tools"><FileSearch size={30}/><h3>No tools found</h3><p>Try a different search term or select another category.</p><button className="btn btn-light" onClick={()=>{setQuery("");setCategory("All tools")}}>Clear filters</button></div>}
    </section>
    <section className="all-tools-help"><div className="container"><div><h2>Can't find the tool you need?</h2><p>We're adding more PDF tools to PDFKit. Check back as the library grows.</p></div><a className="btn btn-primary" href="mailto:hello@example.com">Suggest a tool <ArrowRight size={15}/></a></div></section>
  </main>;
}

function HowItWorks() {
  const steps = [
    ["01","Upload your file","Select a file or drop it onto the page.","upload"],
    ["02","Choose your options","Set only the options you need for the job.","options"],
    ["03","Download the result","Save your finished file in one click.","download"]
  ];
  return <section className="section container" id="how">
    <div className="center-heading"><h2>How it works</h2><p>Three steps from file to finished result.</p></div>
    <div className="steps-grid">{steps.map(([n,title,desc,type])=><div className="step" key={n}>
      <div className={`step-visual ${type}`}>
        {type==="upload" ? <><div className="upload-circle"><Upload size={28}/></div><span className="fake-button">Select file</span><small>or drop it here</small></> :
         type==="options" ? <div className="fake-options"><i/><b/><i/><b/><span/></div> :
         <div className="download-doc"><span>PDF</span><i/><i/><i/><Check size={20}/></div>}
      </div>
      <small className="step-number">Step {n}</small><h3>{title}</h3><p>{desc}</p>
    </div>)}</div>
  </section>;
}

function Benefits() {
  return <section className="benefits container">
    <div className="benefit-visual">
      <div className="browser-bar"><i/><i/><i/><span/></div>
      <div className="browser-content"><div className="drop-zone"><Upload size={28}/><b>Select file</b></div><div className="side-options"><i/><span/><i/><span/><b/></div></div>
    </div>
    <div className="benefit-copy"><h2>Built to save you time</h2><p>Everything you need for documents and images, without switching between apps.</p>
      <ul><li><Check/> One place for conversions, edits and security</li><li><Check/> Clear options with no clutter</li><li><Check/> Download your result in one click</li></ul>
    </div>
  </section>;
}

function Testimonials() {
  return <section className="section container">
    <div className="section-heading"><div><h2>What people say</h2><p>Simple tools for everyday document tasks.</p></div></div>
    <div className="quotes">{[1,2,3].map((n)=><article className="quote" key={n}><div className={`avatar avatar-${n}`}>{["A","M","J"][n-1]}</div><div><b>{["Alex Morgan","Mia Chen","Jordan Lee"][n-1]}</b><small>PDFKit user</small></div><p>“A clean and simple way to handle everyday PDF tasks.”</p></article>)}</div>
  </section>;
}

function Pricing() {
  return <section className="section container" id="pricing"><div className="center-heading"><h2>Simple pricing</h2><p>Choose the plan that works for you.</p></div>
    <div className="pricing-grid"><article><h3>Free</h3><div className="price">$0 <small>/ month</small></div><p>For everyday PDF tasks.</p><ul><li><Check/> Essential PDF tools</li><li><Check/> Simple file options</li><li><Check/> No installation</li></ul><a className="btn btn-light" href="#tools">Get started</a></article>
      <article className="pro-plan"><span className="popular-label">COMING SOON</span><h3>Pro</h3><div className="price">— <small>/ month</small></div><p>For advanced workflows.</p><ul><li><Check/> Advanced tools</li><li><Check/> Higher usage limits</li><li><Check/> Priority support</li></ul><a className="btn btn-dark" href="#tools">Explore tools</a></article></div>
  </section>;
}

function FAQ() {
  const items = [["Is PDFKit free to use?","PDFKit offers a free starting experience. Plan limits will be published before launch."],["Are my files safe?","Files should be processed securely. Add and publish your actual file-retention policy before launch."],["Which devices can I use?","Any device with a modern browser: phone, tablet or computer."],["Do I need to install anything?","No installation needed. Open the site and pick a tool."]];
  const [open,setOpen] = useState(0);
  return <section className="section container faq"><div className="center-heading"><h2>Frequently asked questions</h2></div>
    <div className="faq-list">{items.map(([q,a],i)=><div className="faq-item" key={q}><button onClick={()=>setOpen(open===i?-1:i)}>{q}<ChevronDown className={open===i?"rotated":""}/></button>{open===i&&<p>{a}</p>}</div>)}</div>
  </section>;
}

function Footer() {
  return <footer className="footer"><div className="container footer-grid"><div><a className="logo" href="#"><span>PDF</span>Kit</a><p>Every PDF and image tool in one place. Convert, merge, split, compress and protect your files.</p></div>
    <div><b>CONVERT</b><a href="#tools">JPG to PDF</a><a href="#tools">PDF to JPG</a><a href="#tools">PDF to Word</a><a href="#tools">Word to PDF</a></div>
    <div><b>ORGANIZE</b><a href="#tools">Merge</a><a href="#tools">Split</a><a href="#tools">Rotate</a><a href="#tools">Organize pages</a></div>
    <div><b>COMPANY</b><a href="#all-tools">All tools</a><a href="#pricing">Pricing</a><a href="#faq">Help center</a><a href="mailto:hello@example.com">Contact</a></div>
  </div><div className="container footer-bottom"><span>© 2026 PDFKit. All rights reserved.</span><div><a href="#privacy">Privacy</a><a href="#terms">Terms</a><a href="#cookies">Cookies</a></div></div></footer>;
}

export default function App() {
  const [currentPage, setCurrentPage] = useState(window.location.hash === "#all-tools" ? "tools" : "home");
  React.useEffect(() => {
    const handleHashChange = () => setCurrentPage(window.location.hash === "#all-tools" ? "tools" : "home");
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);
  return <><Header/>{currentPage === "tools" ? <AllToolsPage/> : <main id="home"><Hero/><PopularTools/><HowItWorks/><Benefits/><Testimonials/><Pricing/><FAQ/><section className="final-cta"><h2>Ready to get started?</h2><p>Pick a tool and finish your first file in minutes.</p><a className="btn btn-primary" href="#all-tools">Browse all tools <ArrowRight size={16}/></a></section></main>}<Footer/></>;
}
