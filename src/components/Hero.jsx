import { motion } from "framer-motion";
import { useLanguage } from '../LanguageContext';

const Hero = () => {
  const { t } = useLanguage(); // Lấy bộ dịch

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white"
    >
      {/* Nền trang trí nhẹ nhàng phía sau */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-beige/20 -z-0 rounded-l-[100px] blur-3xl"></div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center pt-24 relative z-10">
        {/* Bên trái: Nội dung chữ */}
        <div className="text-center lg:text-left">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-brand-gold font-bold tracking-[0.4em] uppercase text-[10px] mb-6 block"
          >
            {t.hero.subtitle} {/* Thay đổi ở đây */}
          </motion.span>

          <motion.h1 
  className="text-4xl md:text-6xl lg:text-[72px] font-serif leading-[1.15] mb-8 text-brand-brown lg:max-w-[1.2em] min-w-full"
  style={{ wordBreak: 'break-keep' }}
>
  {t.hero.title1} <br /> 
  <span className="italic text-brand-orange font-light">
    {t.hero.title2}
  </span>
</motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-500 text-lg md:text-xl mb-12 max-w-lg leading-relaxed italic mx-auto lg:mx-0"
          >
            {t.hero.desc} {/* Thay đổi ở đây */}
          </motion.p>

          {/* Cụm nút bấm */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start"
          >
            <a
              href="https://www.full-jungsung.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-brown text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-brand-orange transition-all shadow-xl hover:scale-105 active:scale-95 text-center"
            >
              {t.hero.explore} {/* Thay đổi ở đây */}
            </a>

            <a
              href="#founder"
              className="border-2 border-brand-brown text-brand-brown px-10 py-5 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-brand-brown hover:text-white transition-all hover:scale-105 active:scale-95 text-center"
            >
              {t.hero.story} {/* Thay đổi ở đây */}
            </a>
          </motion.div>
        </div>

        {/* Bên phải: Hình ảnh */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="w-full max-w-[500px] aspect-[5/5] bg-white rounded-[60px] overflow-hidden shadow-[0_0px_100px_rgba(0,0,0,0.08)] border-[12px] border-white relative z-10">
            <img
              src="/src/assets/images/hero-bg.jpg"
              alt="JungSung Collection"
              className="w-full h-full object-cover scale-105"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/600x800";
              }}
            />
          </div>

          {/* Badge 100% Natural */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute -bottom-10 -left-10 bg-white p-8 md:p-10 rounded-[35px] shadow-2xl z-20 border border-brand-gold/10"
          >
            <p className="text-brand-orange font-serif text-4xl md:text-5xl italic leading-none mb-2">
              100%
            </p>
            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold">
              Natural Purity
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;