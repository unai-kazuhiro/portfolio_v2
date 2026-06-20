// import Image from 'next/image'

import Header from './Header'
import Hero from './Hero'
import About from './About'
import Experience from './Experience'
import Skills from './Skils'
import Products from './Products'
import Contact from './Contact'

export default function Home() {
  return (
    <div className="font-sans antialiased text-slate-900 bg-white selection:bg-orange-200 selection:text-orange-900">
      {/* Global styles for specific animations */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes slowZoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        @keyframes scroll {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(15px); opacity: 0; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes shine {
          0% { transform: translateX(-150%) skewX(-45deg); }
          100% { transform: translateX(200%) skewX(-45deg); }
        }
        html {
          scroll-behavior: smooth;
        }
      `,
        }}
      />

      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Products />
        <Contact />
      </main>

      <footer className="bg-slate-900 py-8 text-center text-slate-400 border-t border-slate-800">
        <div className="container mx-auto px-6">
          <p>
            © {new Date().getFullYear()} Kazuhiro Unai. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
