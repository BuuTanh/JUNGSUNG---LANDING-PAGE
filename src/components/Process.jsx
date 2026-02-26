import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';

const Process = () => {
  const { t } = useLanguage();

  const steps = [
    { id: "01", title: t.process.s1, desc: t.process.s1_d },
    { id: "02", title: t.process.s2, desc: t.process.s2_d },
    { id: "03", title: t.process.s3, desc: t.process.s3_d },
    { id: "04", title: t.process.s4, desc: t.process.s4_d }
  ];

  return (
    <section id="process" className="py-24 bg-white">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 text-center md:text-left">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-serif mb-4 text-brand-brown">{t.process.title}</h2>
            <p className="text-gray-500 italic text-sm">{t.process.subtitle}</p>
          </div>
          <button className="text-brand-orange font-bold uppercase tracking-widest text-[10px] border-b-2 border-brand-orange pb-2 hover:text-brand-brown hover:border-brand-brown transition-all">
            {t.process.detail}
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} viewport={{ once: true }} className="relative group">
              <div className="aspect-square bg-brand-beige rounded-[40px] overflow-hidden mb-6 shadow-sm border border-transparent group-hover:border-brand-gold/20 transition-all duration-500">
                <img src={`/src/assets/images/process-${index + 1}.jpg`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={step.title} />
              </div>
              <span className="text-5xl font-serif text-brand-gold/10 absolute top-4 left-6">{step.id}</span>
              <h3 className="text-lg font-bold text-brand-brown mb-2 px-2">{step.title}</h3>
              <p className="text-xs text-gray-400 px-2 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;