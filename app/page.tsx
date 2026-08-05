"use client";

import React from 'react';
import { siteConfig } from '../config/site';

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-linen text-stone-900 font-sans selection:bg-gold/20 antialiased">
      
      {/* Header / Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-plum/95 border-b border-gold/20 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center space-x-4 cursor-pointer group"
            aria-label="Scroll to top of page"
          >
            {/* Custom Brand Logo */}
            <div className="w-12 h-12 rounded-full border border-gold/45 bg-plum-dark flex items-center justify-center p-1 overflow-hidden transition-transform duration-300 group-hover:scale-105">
              <img 
                src="/crafty_damsel_logo.jpg" 
                alt="Crafty Damsel Logo" 
                className="object-contain w-full h-full rounded-full" 
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-serif tracking-widest uppercase font-semibold text-white leading-tight group-hover:text-gold transition-colors">
                {siteConfig.name}
              </span>
              <span className="text-[9px] tracking-widest uppercase text-gold font-medium">
                by Beeba Sheikh
              </span>
            </div>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10 text-xs tracking-widest uppercase font-medium text-stone-300">
            <a href="#gallery" className="hover:text-gold transition-colors">The Gallery</a>
            <a href="#services" className="hover:text-gold transition-colors">Bespoke Services</a>
            <a href="#about" className="hover:text-gold transition-colors">Our Story</a>
            <a href="#contact" className="hover:text-gold transition-colors">Contact</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <a 
              href="#contact" 
              className="hidden sm:inline-block px-5 py-2.5 bg-gold hover:bg-gold-dark text-plum-dark text-xs tracking-widest uppercase transition-all duration-300 rounded-none font-semibold shadow-sm"
            >
              Contact Us
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-stone-200 hover:text-gold focus:outline-none transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMobileMenuOpen && (
          <nav className="md:hidden bg-plum-dark/98 border-t border-gold/20 px-6 py-6 space-y-4 text-xs tracking-widest uppercase font-medium text-stone-300">
            <a 
              href="#gallery" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 hover:text-gold transition-colors border-b border-gold/10"
            >
              The Gallery
            </a>
            <a 
              href="#services" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 hover:text-gold transition-colors border-b border-gold/10"
            >
              Bespoke Services
            </a>
            <a 
              href="#about" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 hover:text-gold transition-colors border-b border-gold/10"
            >
              Our Story
            </a>
            <a 
              href="#contact" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 hover:text-gold transition-colors border-b border-gold/10"
            >
              Contact
            </a>
            <div className="pt-2">
              <a 
                href="#contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-center px-5 py-3 bg-gold hover:bg-gold-dark text-plum-dark text-xs tracking-widest uppercase transition-all duration-300 font-semibold shadow-sm"
              >
                Contact Us
              </a>
            </div>
          </nav>
        )}
      </header>

      {/* Luxury Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center px-6 bg-gradient-to-b from-plum-dark to-plum text-white overflow-hidden py-16">
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        {/* Soft, warm background radial glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-plum-light/20 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto text-center z-10 space-y-8">
          <span className="text-xs tracking-[0.25em] uppercase font-semibold text-gold block">
            Handcrafted in {siteConfig.location}
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-[1.1] tracking-tight font-light">
            Exquisite Bespoke <br/>
            <span className="italic font-normal text-gold">Artistry & Design</span>
          </h1>
          <p className="text-md md:text-lg text-stone-200 font-light max-w-xl mx-auto leading-relaxed">
            {siteConfig.description}
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#contact" 
              className="w-full sm:w-auto px-8 py-4 bg-gold hover:bg-gold-dark text-plum-dark text-xs tracking-widest uppercase font-semibold transition-all duration-300 shadow-md"
            >
              Begin Your Custom Order
            </a>
            <a 
              href="#gallery" 
              className="w-full sm:w-auto px-8 py-4 border border-gold/40 hover:bg-white/5 text-white text-xs tracking-widest uppercase font-medium transition-all duration-300"
            >
              View Creations
            </a>
          </div>
        </div>
      </section>

      {/* Visual Portfolio (Direct Scraped Instagram Feed) */}
      <section id="gallery" className="py-24 px-6 bg-stone-100 border-t border-b border-stone-200/60">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div className="space-y-3">
              <span className="text-xs tracking-[0.2em] uppercase font-semibold text-gold-dark block">Visual Portfolio</span>
              <h2 className="text-3xl md:text-4xl font-serif text-plum font-light">From our Studio</h2>
            </div>
            <p className="text-stone-500 text-sm max-w-md mt-4 md:mt-0 leading-relaxed">
              A meticulously detailed selection of our finest custom works and handcrafted objects, synced directly from the studio portfolio.
            </p>
          </div>

          {/* Dynamic Image Grid sourcing downloaded Instagram photos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 3, 4, 5, 6, 12].map((num) => (
              <div key={num} className="group overflow-hidden bg-white border border-stone-200/60 relative aspect-[4/5] shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="w-full h-full overflow-hidden">
                  <img 
                    src={`/photos/post_${num}.jpg`} 
                    alt={`Bespoke Craftwork ${num}`} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      // Silently fallback to our beautiful logo image if fewer than 6 images are present
                      e.currentTarget.src = "/crafty_damsel_logo.jpg";
                      e.currentTarget.className = "w-full h-full object-contain p-12 bg-plum";
                    }}
                  />
                </div>
                {/* Ornate Luxury Text Overlay on Hover */}
                <div className="absolute inset-0 bg-plum-dark/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8 text-white">
                  <span className="text-gold text-[10px] tracking-widest uppercase mb-1">Authentic Instagram Post</span>
                  <p className="font-serif italic text-base">Studio Collection Piece 0{num}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Suite */}
      <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16 space-y-3">
          <span className="text-xs tracking-[0.2em] uppercase font-semibold text-gold-dark block">Bespoke Design Suite</span>
          <h2 className="text-3xl md:text-4xl font-serif text-plum font-light">Custom Commissions & Services</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {siteConfig.services.map((service, idx) => (
            <div key={idx} className="space-y-6 p-8 bg-white border border-stone-200 shadow-sm hover:shadow-md transition-all duration-300">
              <span className="text-xs font-semibold text-gold-dark block tracking-widest uppercase">0{idx + 1} // Service</span>
              <h3 className="text-2xl font-serif text-plum font-normal">{service.title}</h3>
              <p className="text-stone-600 text-sm leading-relaxed">{service.description}</p>
              <div className="pt-4 border-t border-stone-100">
                <span className="text-xs text-stone-400 block uppercase tracking-wider mb-1">Pricing Guide</span>
                <span className="text-xs font-semibold text-plum tracking-wide">{service.priceHint}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About The Story */}
      <section id="about" className="py-24 px-6 bg-stone-100/50 border-t border-b border-stone-200/50">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="text-xs tracking-[0.2em] uppercase font-semibold text-gold-dark block">Our Story</span>
          <h2 className="text-3xl md:text-4xl font-serif text-plum font-light">Beeba Sheikh</h2>
          <div className="w-12 h-[1px] bg-gold mx-auto"></div>
          <p className="text-stone-600 text-md leading-relaxed max-w-2xl mx-auto">
            Driven by a deep passion for elegant textures, customized design aesthetics, and refined Pakistani artistry, Beeba Sheikh personally constructs and details every commission that exits our Karachi studio space.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-gradient-to-b from-plum-dark to-plum text-white border-t border-gold/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <span className="text-xs tracking-[0.25em] uppercase font-semibold text-gold block">Get In Touch</span>
            <h2 className="text-3xl md:text-5xl font-serif text-white font-light">Let&apos;s Create Together</h2>
            <p className="text-stone-300 text-sm max-w-lg mx-auto leading-relaxed">
              Reach out through your preferred channel. We&apos;d love to hear about your vision and bring your bespoke piece to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Instagram Card */}
            <a
              href={siteConfig.contact.instagram}
              target="_blank"
              rel="noreferrer"
              className="group relative flex flex-col items-center justify-center gap-6 p-10 border border-gold/20 bg-plum-dark/40 hover:bg-plum-dark/70 hover:border-gold/50 transition-all duration-500 overflow-hidden text-center"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08),transparent_70%)]"></div>

              <div className="w-16 h-16 rounded-full border border-gold/30 bg-gradient-to-br from-[#833ab4]/30 via-[#fd1d1d]/20 to-[#fcb045]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="#d4af37" strokeWidth="1.5" fill="none"/>
                  <circle cx="12" cy="12" r="4.5" stroke="#d4af37" strokeWidth="1.5" fill="none"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="#d4af37"/>
                </svg>
              </div>

              <div className="space-y-2">
                <span className="text-xs tracking-widest uppercase text-gold font-semibold block">Instagram</span>
                <p className="text-white font-serif text-xl font-light">@crafty_damsel</p>
                <p className="text-stone-400 text-xs leading-relaxed">Explore our latest creations, studio reels, and behind-the-scenes moments.</p>
              </div>

              <span className="text-xs uppercase tracking-widest text-gold/70 group-hover:text-gold border-b border-gold/30 group-hover:border-gold pb-0.5 transition-all duration-300">
                View Profile →
              </span>
            </a>

            {/* WhatsApp Card */}
            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noreferrer"
              className="group relative flex flex-col items-center justify-center gap-6 p-10 border border-gold/20 bg-plum-dark/40 hover:bg-plum-dark/70 hover:border-gold/50 transition-all duration-500 overflow-hidden text-center"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(ellipse_at_center,rgba(37,211,102,0.08),transparent_70%)]"></div>

              <div className="w-16 h-16 rounded-full border border-gold/30 bg-[#25d366]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                  <path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.12.55 4.19 1.6 6.01L0 24l6.15-1.61A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.48-8.52z" fill="#25d366" opacity="0.2"/>
                  <path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.12.55 4.19 1.6 6.01L0 24l6.15-1.61A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.48-8.52zM12 22c-1.85 0-3.67-.5-5.25-1.44l-.38-.22-3.92 1.03 1.04-3.82-.25-.4A9.94 9.94 0 0 1 2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10zm5.47-7.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.41-1.49-.89-.8-1.49-1.78-1.67-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51H7.1c-.2 0-.52.07-.79.37C6.04 8.4 5.3 9.1 5.3 10.57c0 1.47 1.07 2.9 1.22 3.1.15.2 2.1 3.2 5.09 4.49.71.31 1.27.49 1.7.63.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" fill="#d4af37"/>
                </svg>
              </div>

              <div className="space-y-2">
                <span className="text-xs tracking-widest uppercase text-gold font-semibold block">WhatsApp</span>
                <p className="text-white font-serif text-xl font-light">{siteConfig.contact.whatsapp}</p>
                <p className="text-stone-400 text-xs leading-relaxed">Message us directly to discuss your order, ask questions, or schedule a consultation.</p>
              </div>

              <span className="text-xs uppercase tracking-widest text-gold/70 group-hover:text-gold border-b border-gold/30 group-hover:border-gold pb-0.5 transition-all duration-300">
                Chat Now →
              </span>
            </a>
          </div>

          <div className="mt-16 flex items-center gap-4">
            <div className="flex-1 h-[1px] bg-gold/15"></div>
            <span className="text-gold/40 text-xs tracking-widest uppercase">Crafty Damsel Studio</span>
            <div className="flex-1 h-[1px] bg-gold/15"></div>
          </div>
        </div>
      </section>

      {/* Luxury Footer */}
      <footer className="bg-plum-dark text-stone-300 py-20 px-6 border-t border-gold/25">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="space-y-4">
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center space-x-3 cursor-pointer group"
              aria-label="Scroll to top of page"
            >
              <img src="/crafty_damsel_logo.jpg" alt="Crafty Damsel Logo" className="w-10 h-10 rounded-full border border-gold/30 p-0.5 transition-transform duration-300 group-hover:scale-105" />
              <div className="flex flex-col">
                <span className="text-md font-serif tracking-widest uppercase text-white font-semibold group-hover:text-gold transition-colors">{siteConfig.name}</span>
                <span className="text-[8px] tracking-widest uppercase text-gold">by Beeba Sheikh</span>
              </div>
            </a>
            <p className="text-sm text-stone-300 max-w-sm leading-relaxed">
              Crafting premium custom works with artistic precision.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-gold font-semibold">The Studio</h4>
            <p className="text-sm">
              Karachi, Pakistan <br />
              Visits by appointment only.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-gold font-semibold">Connect with Us</h4>
            <div className="space-y-2 text-sm">
              <a href={siteConfig.contact.instagram} target="_blank" rel="noreferrer" className="block hover:text-white transition-colors">Instagram</a>
              <span className="block">WhatsApp: {siteConfig.contact.whatsapp}</span>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-8 border-t border-gold/10 text-xs flex flex-col md:flex-row justify-between text-stone-450 gap-4">
          <span>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</span>
          <span>Crafted beautifully for the design-minded.</span>
        </div>
      </footer>

    </div>
  );
}