import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CATEGORIES } from './constants';
import type { Category, ImageAsset } from './constants';

// --- Minimalist Icons ---
const IconMenu = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
);
const IconClose = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
);
const IconArrowRight = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
);

function App() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedImage, setSelectedImage] = useState<ImageAsset | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    whatsapp: '',
    mensaje: ''
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { nombre, whatsapp, mensaje } = formData;
    const text = `Hola Creaciones! 👋%0AMi nombre es: ${nombre}%0AWhatsApp: ${whatsapp}%0A%0AProyecto:%0A${mensaje}`;
    window.open(`https://wa.me/525512345678?text=${text}`, '_blank');
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-brand-light text-brand-dark font-sans selection:bg-brand-pink selection:text-white">
      
      {/* --- Navigation --- */}
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md border-b border-brand-pink/10 py-4 shadow-md' : 'bg-transparent py-8'
      }`}>
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex items-center justify-between">
          <button className="lg:hidden text-brand-dark" onClick={() => setMobileMenuOpen(true)}>
            <IconMenu />
          </button>

          <div className="hidden lg:flex items-center gap-12 text-[11px] font-bold uppercase tracking-[0.3em]">
            <a href="#colecciones" className="hover:text-brand-fuchsia transition-colors duration-300">Colecciones</a>
            <a href="#atelier" className="hover:text-brand-fuchsia transition-colors duration-300">El Atelier</a>
          </div>

          <div className="absolute left-1/2 -translate-x-1/2 text-center group cursor-pointer">
            <h1 className={`text-2xl md:text-4xl font-serif italic font-black tracking-tighter leading-none transition-colors duration-300 ${isScrolled ? 'text-brand-dark' : 'text-white md:text-brand-dark'}`}>
              Creaciones
            </h1>
            <p className="text-[8px] font-bold uppercase tracking-[0.5em] text-brand-fuchsia mt-1">Manufactura de Alta Gama</p>
          </div>

          <div className="hidden lg:flex items-center gap-12 text-[11px] font-bold uppercase tracking-[0.3em]">
            <a href="#contacto" className="hover:text-brand-fuchsia transition-colors duration-300">Contacto</a>
            <a href="#contacto" className="bg-brand-dark text-white px-8 py-2.5 rounded-full hover:bg-brand-fuchsia transition-all duration-300 shadow-lg active:scale-95">
              Cotizar Proyecto
            </a>
          </div>
          <div className="lg:hidden w-6" />
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <section className="relative h-[90vh] md:h-screen w-full flex items-center justify-center overflow-hidden bg-brand-dark">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img 
            src="assets/quinceañeras/651213258_3369403879879298_9148866734338372629_n.jpg" 
            className="w-full h-full object-cover brightness-[0.7]"
            alt="Hero background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/20 via-transparent to-brand-dark/40" />
        </motion.div>

        <div className="relative z-10 text-center text-white px-6 max-w-5xl">
          <motion.span 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xs md:text-sm font-bold uppercase tracking-[0.6em] mb-6 block text-brand-pink drop-shadow-sm"
          >
            Maestría en cada puntada
          </motion.span>
          <motion.h2 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-5xl md:text-[120px] font-serif italic font-black tracking-tighter leading-[0.9] mb-12 drop-shadow-xl"
          >
            El arte de la <br /> 
            <span className="text-white">Confección.</span>
          </motion.h2>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <a href="#colecciones" className="inline-flex items-center gap-4 bg-brand-fuchsia text-white px-12 py-5 rounded-full text-[11px] font-black uppercase tracking-[0.3em] hover:bg-white hover:text-brand-fuchsia transition-all duration-300 shadow-2xl active:scale-95">
              Explorar Catálogo
              <IconArrowRight />
            </a>
          </motion.div>
        </div>
      </section>

      {/* --- Intro Section --- */}
      <section id="atelier" className="py-24 md:py-48 px-6 md:px-12 bg-white">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[11px] font-black uppercase tracking-[0.5em] text-brand-pink mb-8 block">Nuestra Esencia</span>
            <h3 className="text-4xl md:text-6xl font-serif italic font-black tracking-tighter leading-tight mb-10 text-brand-dark">
              Transformamos la visión de nuestros clientes en realidades textiles.
            </h3>
            <p className="text-lg text-brand-gray leading-relaxed mb-12 max-w-lg font-medium">
              Creaciones es más que un atelier; es un centro de manufactura donde la tradición se une con la modernidad. Cada pieza, desde vestidos ceremoniales hasta decoraciones exclusivas, se fabrica bajo los más altos estándares de calidad.
            </p>
            <div className="flex gap-16">
              <div>
                <p className="text-4xl font-serif font-black mb-1 text-brand-fuchsia">25+</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-brand-gray/60">Años de Historia</p>
              </div>
              <div>
                <p className="text-4xl font-serif font-black mb-1 text-brand-purple">100%</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-brand-gray/60">Calidad Atelier</p>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl border-[12px] border-brand-light">
              <img src="assets/identidad/presentacion 2.png" className="w-full h-full object-cover" alt="Atelier" />
            </div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white p-6 rounded-[40px] shadow-2xl hidden md:flex items-center justify-center border-4 border-brand-light animate-bounce-slow">
              <img src="assets/identidad/logotipo.png" className="w-full h-full object-contain" alt="Logo icon" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- Collections Grid --- */}
      <section id="colecciones" className="py-24 md:py-48 px-6 md:px-12 bg-brand-light">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8 border-b border-brand-pink/10 pb-12">
            <div>
              <span className="text-[11px] font-black uppercase tracking-[0.5em] text-brand-pink mb-6 block">Nuestro Trabajo</span>
              <h3 className="text-5xl md:text-8xl font-serif italic font-black tracking-tighter leading-none text-brand-dark">Colecciones.</h3>
            </div>
            <p className="text-brand-gray max-w-[320px] text-sm leading-relaxed italic border-l-2 border-brand-pink/30 pl-8 font-medium">
              "Cada categoría representa una especialidad de nuestro centro manufacturero de alta gama."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {CATEGORIES.map((cat, idx) => (
              <motion.div 
                key={cat.id}
                whileHover={{ y: -15 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`group cursor-pointer ${idx === 0 ? 'lg:col-span-2' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                <div className={`relative overflow-hidden rounded-[50px] shadow-2xl ${idx === 0 ? 'aspect-[16/9]' : 'aspect-[4/5]'}`}>
                  <img 
                    src={cat.preview} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    alt={cat.name}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
                  <div className="absolute bottom-12 left-12 text-white">
                    <h4 className="text-3xl md:text-5xl font-serif italic font-black tracking-tight mb-3">{cat.name}</h4>
                    <span className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 text-brand-pink">
                      Explorar Línea <IconArrowRight />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Contact & Footer --- */}
      <footer id="contacto" className="bg-brand-dark text-white pt-32 pb-16 px-6 md:px-12 rounded-t-[80px] md:rounded-t-[120px] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-fuchsia/10 rounded-full blur-[120px] -mr-40 -mt-40" />
        
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-32 mb-32 relative z-10">
          <div>
            <h3 className="text-5xl md:text-[100px] font-serif italic font-black tracking-tighter leading-none mb-12">
              Demos vida a <br /> <span className="text-brand-pink">tu proyecto.</span>
            </h3>
            <p className="text-xl text-neutral-400 max-w-sm mb-20 italic font-medium leading-relaxed">
              Inicia tu proceso de cotización directamente con nuestros maestros artesanos.
            </p>
            <div className="space-y-12">
              <div className="flex items-center gap-8 group cursor-pointer">
                <div className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center text-brand-pink group-hover:bg-brand-pink group-hover:text-white transition-all duration-300">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-pink mb-1">Atención Directa</p>
                  <p className="text-3xl font-serif italic text-white group-hover:text-brand-pink transition-colors">+52 (55) 1234 5678</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-12 md:p-20 rounded-[60px] text-brand-dark shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)] border border-brand-light">
            <form className="space-y-10" onSubmit={handleFormSubmit}>
              <div className="space-y-3 border-b-2 border-brand-pink/10 pb-6 focus-within:border-brand-fuchsia transition-all duration-300">
                <label className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-fuchsia">Nombre Completo</label>
                <input 
                  type="text" 
                  className="w-full outline-none text-2xl font-serif italic bg-transparent text-brand-dark placeholder:text-brand-gray/30" 
                  placeholder="Su nombre"
                  required
                  value={formData.nombre}
                  onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                />
              </div>
              <div className="space-y-3 border-b-2 border-brand-pink/10 pb-6 focus-within:border-brand-fuchsia transition-all duration-300">
                <label className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-fuchsia">WhatsApp</label>
                <input 
                  type="text" 
                  className="w-full outline-none text-2xl font-serif italic bg-transparent text-brand-dark placeholder:text-brand-gray/30" 
                  placeholder="+52 ..." 
                  required
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                />
              </div>
              <div className="space-y-3 border-b-2 border-brand-pink/10 pb-6 focus-within:border-brand-fuchsia transition-all duration-300">
                <label className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-fuchsia">Mensaje</label>
                <textarea 
                  className="w-full outline-none text-2xl font-serif italic h-32 resize-none bg-transparent text-brand-dark placeholder:text-brand-gray/30" 
                  placeholder="Su visión..."
                  required
                  value={formData.mensaje}
                  onChange={(e) => setFormData({...formData, mensaje: e.target.value})}
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-brand-fuchsia text-white py-8 rounded-[30px] text-[11px] font-black uppercase tracking-[0.5em] hover:bg-brand-dark transition-all duration-300 shadow-xl shadow-brand-pink/20 active:scale-95"
              >
                Iniciar Solicitud
              </button>
            </form>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 border-t border-white/5 pt-16 text-[10px] font-black uppercase tracking-[0.3em] text-neutral-600">
          <p>© 2026 Creaciones. Atelier Manufacturero de Alta Gama.</p>
          <div className="flex gap-12">
            <a href="#" className="hover:text-brand-pink transition-colors">Instagram</a>
            <a href="#" className="hover:text-brand-pink transition-colors">Facebook</a>
          </div>
        </div>
      </footer>

      {/* --- Gallery Modal --- */}
      <AnimatePresence>
        {selectedCategory && (
          <motion.div 
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-[200] bg-brand-light overflow-y-auto"
          >
            <div className="sticky top-0 bg-white/95 backdrop-blur-md z-10 py-10 px-8 md:px-16 flex justify-between items-center border-b border-brand-pink/10 shadow-sm">
              <div>
                <h3 className="text-3xl md:text-5xl font-serif italic font-black tracking-tight text-brand-dark">{selectedCategory.name}</h3>
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-fuchsia mt-2">{selectedCategory.images.length} Piezas en Catálogo</p>
              </div>
              <button onClick={() => setSelectedCategory(null)} className="w-16 h-16 bg-brand-dark text-white rounded-full flex items-center justify-center hover:bg-brand-fuchsia transition-all shadow-xl active:scale-90">
                <IconClose />
              </button>
            </div>
            <div className="max-w-[1600px] mx-auto px-8 md:px-16 py-24">
              <div className="columns-1 md:columns-2 lg:columns-3 gap-12 space-y-12">
                {selectedCategory.images.map((img, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="relative rounded-[40px] overflow-hidden cursor-zoom-in group shadow-2xl"
                    onClick={() => setSelectedImage(img)}
                  >
                    <img src={img.src} className="w-full h-auto transition-transform duration-1000 group-hover:scale-110" alt={img.alt} />
                    <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/30 transition-all duration-700" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- Image Zoom --- */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[300] bg-brand-dark/98 flex items-center justify-center p-8"
            onClick={() => setSelectedImage(null)}
          >
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={selectedImage.src} 
              className="max-w-full max-h-full object-contain rounded-[40px] shadow-2xl border-4 border-white/10"
            />
            <button className="absolute top-12 right-12 text-white/40 hover:text-white transition-all scale-150 p-4">
              <IconClose />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- Mobile Menu --- */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            className="fixed inset-0 z-[400] bg-brand-dark text-white p-12 flex flex-col justify-between"
          >
            <div>
              <button onClick={() => setMobileMenuOpen(false)} className="mb-24 text-brand-pink">
                <IconClose />
              </button>
              <div className="flex flex-col gap-12 text-5xl font-serif italic font-black tracking-tight">
                <a href="#colecciones" onClick={() => setMobileMenuOpen(false)} className="hover:text-brand-pink transition-colors">Colecciones</a>
                <a href="#atelier" onClick={() => setMobileMenuOpen(false)} className="hover:text-brand-pink transition-colors">El Atelier</a>
                <a href="#contacto" onClick={() => setMobileMenuOpen(false)} className="hover:text-brand-pink transition-colors">Contacto</a>
              </div>
            </div>
            <div className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-pink/40">
              Creaciones Atelier © 2026
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- Floating WhatsApp --- */}
      <a 
        href="https://wa.me/525512345678" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-12 right-12 w-24 h-24 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_30px_60px_-10px_rgba(37,211,102,0.6)] hover:scale-110 transition-transform active:scale-90 z-[150]"
      >
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-12.7 8.19 8.19 0 0 1 4.9 1.5L22 3l-1.5 5.5Z"/></svg>
      </a>

    </div>
  );
}

export default App;
