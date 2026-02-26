import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "../LanguageContext";

const Technology = () => {
  const { t } = useLanguage();

  // Mảng lợi ích lấy từ file dịch thuật
  const benefits = [t.tech.b1, t.tech.b2, t.tech.b3, t.tech.b4];

  return (
    <section className="py-24 bg-brand-brown text-white overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="bg-black/20 rounded-[60px] p-8 md:p-16 border border-white/10 relative shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:max-w-xl"
            >
              <span className="text-brand-orange font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block opacity-80">
                {t.tech.title}
              </span>
              <h2 className="text-3xl md:text-5xl font-serif mb-8 leading-tight">
                {t.tech.subtitle}
              </h2>
              {/* Tăng line-height cho đoạn mô tả */}
              <p className="text-gray-400 mb-10 leading-[1.8] italic text-sm md:text-base">
                {t.tech.desc}
              </p>

              <div className="grid gap-5">
                {benefits.map((text, i) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <CheckCircle2 className="text-brand-orange w-5 h-5 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-sm tracking-wide leading-relaxed text-gray-200">
                      {text}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white p-6 rounded-[40px] shadow-2xl border-4 border-white/10">
                <img
                  src="/images/patents.png"
                  alt="Patents"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 bg-brand-orange px-6 py-2.5 rounded-full font-bold text-[10px] uppercase tracking-widest shadow-2xl border-2 border-white">
                K-Patented
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
