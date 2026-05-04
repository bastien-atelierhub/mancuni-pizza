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
            <div className="flex items-end h-full w-full px-8 md:px-16 lg:px-24 pb-20 md:pb-32">
              <div className="flex flex-col items-start max-w-2xl">
                <h1 className="font-title text-foreground text-[3.5rem] md:text-5xl lg:text-7xl leading-[1.05] tracking-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
                  Forno<br />
                  Napolitano,<br />
                  Sabor<br />
                  Authentico
                </h1>
                <div className="w-[60px] h-[2px] bg-amber mt-8 shadow-[0_2px_8px_rgba(0,0,0,0.6)]" />
              </div>
            </div>
          </PizzaCanvas>
        </section>

        {/* ═══ SECTION 2 — IL MANIFESTO ═══ */}
        <section className="relative w-full md:min-h-screen mt-24 md:mt-40 bg-[#0A0A0A] flex flex-col md:block">
          {/* Background image — Mobile: displayed below text, Desktop: absolute full cover */}
          <div className="order-2 md:order-none relative w-full h-[60vh] md:absolute md:inset-0 md:h-full">
            <img
              src="/assets/maradonna-2.jpg"
              alt="Il Pizzaiolo — the craft behind every pizza"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ objectPosition: "left 20%" }}
            />
            {/* Top gradient to blend smoothly on mobile and desktop */}
            <div
              className="absolute inset-x-0 top-0 h-[15vh] md:h-[35vh]"
              style={{
                background: "linear-gradient(to bottom, #0A0A0A 0%, rgba(10,10,10,0.7) 40%, transparent 100%)"
              }}
            />
            {/* Bottom gradient */}
            <div
              className="absolute inset-x-0 bottom-0 h-[15vh] md:h-[30vh]"
              style={{
                background: "linear-gradient(to top, #0A0A0A 0%, rgba(10,10,10,0.5) 50%, transparent 100%)"
              }}
            />
          </div>

          {/* Text overlay — Mobile: top, Desktop: right side */}
          <div className="order-1 md:order-none relative z-10 grid grid-cols-1 md:grid-cols-2 md:min-h-screen items-center">
            <div className="hidden md:block" />
            <div className="flex flex-col justify-center px-6 md:px-16 lg:px-20 pt-16 pb-8 md:pt-32 md:pb-16 bg-[#0A0A0A] md:bg-transparent">
              <h2 className="font-title text-foreground text-5xl md:text-5xl lg:text-[64px] tracking-tight leading-[1.1] mb-10">
                El Arte que<br />
                no se aprende.<br />
                Se Hereda.
              </h2>
              <div className="border-l-2 border-amber/50 pl-6 md:pl-8 max-w-md ml-4 md:ml-12">
                <p className="font-sans text-foreground/75 text-[15px] md:text-base leading-relaxed mb-4">
                  La pizza napolitana no es un plato. Es una declaración. Cada gesto del pizzaiolo
                  — el estirado a mano, el forno a 450°C, los 90 segundos de cocción exactos —
                  es el resultado de siglos de saber acumulado.
                </p>
                <p className="font-sans text-foreground/55 text-[15px] leading-relaxed">
                  En Mancusi, no cortamos caminos. Nunca.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ SECTION 3 — LA PROMESA ═══ */}
        <section className="bg-background w-full pt-12 pb-4 md:pt-16 md:pb-8 px-6 md:px-16 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            {/* Left: Text */}
            <div className="flex flex-col justify-center">
              <h2 className="font-title text-foreground text-5xl md:text-6xl lg:text-[72px] tracking-tight leading-[1.05] mb-12">
                Directo de Italia.<br />Sin filtros.
              </h2>
              <div className="border-l-[1px] border-[#C49A6C] pl-8 md:pl-10 ml-4 md:ml-40 max-w-sm">
                <p className="font-sans text-foreground/80 text-[15px] md:text-[17px] leading-loose">
                  Cada ingrediente que entra<br className="hidden md:block" />
                  en el forno de Mancusi<br className="hidden md:block" />
                  viene directo de la tradición<br className="hidden md:block" />
                  italiana... o no entra.
                </p>
              </div>
            </div>
            
            {/* Right: Image */}
            <div className="relative w-full h-[400px] md:h-[550px] lg:h-[650px] flex items-center justify-center">
              <img
                src="/assets/3ingredients.png"
                alt="Basil, Mozzarella, Tomato"
                className="w-full h-full object-contain lg:scale-110"
              />
            </div>
          </div>
        </section>

        {/* ═══ SECTION 4 — IL MENÙ ═══ */}
        <section id="menu" className="relative bg-background pt-8 pb-[350px] md:pb-36 px-6 md:px-12 lg:px-24 overflow-hidden">
          {/* Aesthetic Background Filler for the empty space next to the 7th pizza */}
          <div className="absolute bottom-0 right-0 w-[150%] md:w-[90%] lg:w-[70%] max-w-[1100px] h-[400px] md:h-[700px] pointer-events-none z-0">
            <img
              src="/assets/food2.jpg"
              alt="Ingredients and wine"
              className="absolute inset-0 w-full h-full object-cover object-right-bottom brightness-110 contrast-105"
              style={{
                maskImage: 'linear-gradient(to right, transparent, black 400px), linear-gradient(to bottom, transparent, black 300px)',
                WebkitMaskImage: 'linear-gradient(to right, transparent, black 400px), linear-gradient(to bottom, transparent, black 300px)',
                maskComposite: 'intersect',
                WebkitMaskComposite: 'source-in'
              }}
            />
          </div>

          <div className="relative z-10 text-center mb-16 md:mb-20">
            <h2 className="font-title text-foreground text-5xl md:text-6xl tracking-[0.08em] mb-6">
              Il Menù
            </h2>
            <div className="w-[60px] h-[1px] bg-amber mx-auto mb-6" />
            <p className="font-sans italic text-muted text-base">
              Una selección honesta. Sin artificios.
            </p>
          </div>
          
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[2px] max-w-6xl mx-auto">
            {menuItems.map((item, i) => (
              <MenuCard
                key={i}
                name={item.name}
                image={item.image}
                ingredients={item.ingredients}
                price={item.price}
              />
            ))}
          </div>
        </section>

        {/* ═══ SECTION 5 — LA STORIA ═══ */}
        <section id="storia" className="bg-background">
          <div 
            className="relative w-full flex items-center justify-center bg-fixed bg-center bg-cover" 
            style={{ 
              height: "70vh", 
              backgroundImage: "url('/assets/napoli-asuncion.jpg')" 
            }}
          >
            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-black/40" />
            
            <h2 className="relative z-10 font-title text-white text-3xl sm:text-4xl md:text-5xl lg:text-7xl tracking-tight text-center px-4 w-full whitespace-nowrap" style={{ textShadow: "0 4px 30px rgba(0,0,0,0.8)" }}>
              Nata a Napoli. Viva en Asunción.
            </h2>
          </div>
          <div className="relative w-full" style={{ height: "60vh" }}>
            <img
              src="/assets/vespa.jpg"
              alt="Vintage Vespa"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
          </div>
        </section>




        {/* ═══ SECTION 7 — RESERVA ═══ */}
        <section id="reserva" className="bg-background py-28 md:py-36 px-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-title text-foreground text-4xl md:text-7xl tracking-tight mb-6 leading-tight">
              ¿Listo para Napoli?
            </h2>
            <p className="font-sans italic text-muted text-base md:text-lg mb-10 leading-relaxed">
              Las mejores mesas no esperan.
            </p>
            <a
              href="#"
              className="inline-block border border-amber text-amber font-title text-sm tracking-[0.2em] px-10 py-4 hover:bg-amber hover:text-background transition-all duration-300 uppercase"
            >
              Reservar Ahora
            </a>
            <p className="font-sans text-muted text-sm mt-8">+595 21 000 0000</p>
          </div>
        </section>

        {/* ═══ SECTION 8 — FOOTER ═══ */}
        <footer className="bg-[#080808] border-t border-amber/[0.18] py-12 px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
            <div>
              <span className="font-title text-foreground text-lg tracking-[0.1em] block mb-1">MANCUSI</span>
              <span className="font-sans text-muted text-xs">Forno Napolitano, Sabor Authentico</span>
            </div>
            <div className="flex justify-center gap-8 font-sans text-sm text-foreground/60">
              <a href="#menu" className="hover:text-amber transition-colors">Il Menù</a>
              <a href="#storia" className="hover:text-amber transition-colors">La Storia</a>
              <a href="#reserva" className="hover:text-amber transition-colors">Reserva</a>
            </div>
            <div className="text-right font-sans text-muted text-xs">
              <span className="block">Asunción, Paraguay</span>
              <span className="block">@mancusi.py</span>
            </div>
          </div>
          <div className="text-center mt-10 font-sans text-muted/50 text-xs">
            © 2025 Mancusi — Forno Napolitano
          </div>
        </footer>
      </main>
    </>
  );
}
