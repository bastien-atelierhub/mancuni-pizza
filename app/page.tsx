import PizzaCanvas from "@/components/PizzaCanvas";
import Navbar from "@/components/Navbar";
import MenuCard from "@/components/MenuCard";

const menuItems = [
  { name: "Margherita", image: "/assets/margarita.png", ingredients: "Salsa de tomate natural, mozzarella fresca fior di latte y albahaca", price: "Gs. 58.000" },
  { name: "Diávola", image: "/assets/diavola.png", ingredients: "Salsa de tomate natural, mozzarella, salame, pepperoni y tomate picante", price: "Gs. 68.000" },
  { name: "Cinque Formaggi", image: "/assets/5fromages.png", ingredients: "Crema de quesos: azul, ricotta, reggianito, crema y mozzarella, con nueces", price: "Gs. 70.000" },
  { name: "Prosciutto e Funghi", image: "/assets/prochiuto-fungi.png", ingredients: "Salsa de tomate natural, mozzarella, jamón cocido y champiñones frescos", price: "Gs. 75.000" },
  { name: "Pesto", image: "/assets/pesto.png", ingredients: "Pesto de la casa (albahaca y rúcula), mozzarella, aceitunas negras y tomate cherry", price: "Gs. 75.000" },
  { name: "Ischia", image: "/assets/Ischia.png", ingredients: "Tomate cherry, mozzarella, jamón crudo, rúcula y láminas de reggianito", price: "Gs. 80.000" },
  { name: "Capricciosa", image: "/assets/caprichiosa.png", ingredients: "Crema de quesos de la casa, champiñones frescos, salame y pepperoni", price: "Gs. 85.000" },
];


export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full bg-background min-h-screen">

        {/* ═══ SECTION 1 — HERO ═══ */}
        <section id="hero">
          <PizzaCanvas>
            <div className="flex flex-col items-center justify-center h-full text-white text-center px-4 relative z-10 pointer-events-none">
              <h1 className="text-4xl md:text-7xl font-display mb-2 uppercase tracking-tighter drop-shadow-2xl">
                Mancusi
              </h1>
              <p className="text-lg md:text-xl font-light opacity-90 drop-shadow-lg tracking-widest uppercase">
                Forno Napoletano
              </p>
            </div>
          </PizzaCanvas>
        </section>

        {/* ═══ SECTION 2 — MANIFESTO ═══ */}
        <section id="manifesto" className="bg-[#0a0a0a] py-24 px-6 md:px-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-display text-white mb-12 uppercase leading-tight">
              Mancusi no es solo una pizza. <br />
              <span className="text-accent italic">Es una obsesión.</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <p className="text-gray-400 leading-relaxed text-lg">
                  Nacimos del deseo de traer el alma de Nápoles al corazón de Paraguay. 
                  Sin atajos. Sin compromisos. Solo fuego, harina y respeto por el tiempo.
                </p>
                <div className="h-px w-24 bg-accent/30" />
                <img 
                  src="/assets/food2.jpg" 
                  alt="Mancusi Detail" 
                  className="w-full h-80 object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out"
                />
              </div>
              <div className="space-y-8 pt-12 md:pt-0">
                <p className="text-white text-xl font-light italic leading-relaxed">
                  "No buscamos la perfección, buscamos la verdad. Y la verdad está en la masa."
                </p>
                <p className="text-gray-500 text-sm tracking-widest uppercase">
                  — L'Anima de Mancusi
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ SECTION 3 — 3 INGREDIENTS ═══ */}
        <section id="ingredients" className="bg-[#0a0a0a] py-32 px-6 md:px-24">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2">
              <img 
                src="/assets/3ingredients.png" 
                alt="I Tre Ingredienti" 
                className="w-full h-auto scale-110 drop-shadow-[0_0_50px_rgba(255,255,255,0.05)]"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-8">
              <h2 className="text-4xl md:text-6xl font-display text-white uppercase leading-none">
                Directo <br />
                <span className="text-accent">de Italia</span>
              </h2>
              <div className="ml-0 md:ml-40 max-w-sm">
                <p className="text-gray-400 text-lg leading-relaxed">
                  Harina Caputo, Tomates San Marzano y Mozzarella di Bufala. 
                  Tres pilares sobre los que construimos cada bocado de nuestra historia.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ SECTION 4 — MENU ═══ */}
        <section id="menu" className="bg-[#0a0a0a] py-24 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div>
                <p className="text-accent text-sm tracking-widest uppercase mb-4">I Nostri Classici</p>
                <h2 className="text-5xl md:text-8xl font-display text-white uppercase leading-none">
                  Il Menu
                </h2>
              </div>
              <p className="text-gray-500 max-w-xs text-right hidden md:block">
                Cada pizza es horneada individualmente a 450°C para lograr la característica "cornicione" napolitana.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8">
              {menuItems.map((item, i) => (
                <MenuCard key={i} {...item} />
              ))}
            </div>
          </div>
        </section>

        {/* ═══ SECTION 5 — LA STORIA (PARALLAX) ═══ */}
        <section className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden flex items-center justify-center">
          {/* Background Parallax */}
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: 'url("/assets/napoli-asuncion.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed'
            }}
          />
          {/* Overlay to ensure readability */}
          <div className="absolute inset-0 bg-black/40 z-10" />
          
          <div className="relative z-20 text-center px-4 w-full">
            <h2 className="text-3xl md:text-6xl lg:text-7xl font-display text-white uppercase tracking-tighter drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)] leading-tight">
              Nata a Napoli. Viva en Asunción.
            </h2>
          </div>
        </section>

        {/* ═══ SECTION 6 — VESPA ═══ */}
        <section className="bg-[#0a0a0a] py-24 px-6 md:px-24">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-20 overflow-hidden rounded-sm">
              <img 
                src="/assets/vespa.jpg" 
                alt="Mancusi Spirit" 
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out scale-105 hover:scale-100"
              />
            </div>
            
            <p className="text-accent text-sm tracking-widest uppercase mb-6">Pronto per un morso?</p>
            <h2 className="text-5xl md:text-8xl font-display text-white uppercase leading-none mb-12">
              Listo para <br />
              <span className="text-white">Napoli?</span>
            </h2>
            
            <a 
              href="#reserva" 
              className="inline-block bg-white text-black px-12 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-accent hover:text-white transition-all duration-500 hover:scale-105"
            >
              Reserva tu mesa
            </a>
          </div>
        </section>

        {/* ═══ FOOTER ═══ */}
        <footer className="bg-black py-16 px-6 md:px-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-display text-white mb-2 uppercase">Mancusi</h3>
              <p className="text-gray-600 text-sm uppercase tracking-widest">Asunción, Paraguay</p>
            </div>
            
            <div className="flex gap-8 text-gray-500 text-xs tracking-widest uppercase">
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-white transition-colors">WhatsApp</a>
              <a href="#" className="hover:text-white transition-colors">Maps</a>
            </div>
            
            <p className="text-gray-700 text-[10px] tracking-widest uppercase">
              © 2024 Mancusi Pizzeria. Realizzato con passione.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
