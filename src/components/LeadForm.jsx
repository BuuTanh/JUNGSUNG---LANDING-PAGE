import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, X } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const LeadForm = () => {
  const { t } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const products = [
    "Chicken Stock", "Delicious Cube", "Natural Powder", "Kelp Soy Sauce", "Soup Package"
  ];

  return (
    <section id="register" className="py-24 bg-brand-brown relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="bg-black/30 rounded-[60px] p-8 md:p-16 border border-white/5 shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-white">
              <span className="text-brand-orange font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Limited Offer</span>
              <h2 className="text-3xl md:text-5xl font-serif mb-6 leading-tight">{t.form.title} <br /> <span className="text-brand-gold italic">{t.form.subtitle}</span></h2>
              <p className="text-gray-400 mb-10 leading-loose italic text-sm">{t.form.desc}</p>
              <div className="flex gap-12 pt-8 border-t border-white/10">
                <div><p className="text-2xl font-serif text-brand-gold">50,000+</p><p className="text-[8px] uppercase tracking-widest text-gray-500">{t.form.trust1}</p></div>
                <div><p className="text-2xl font-serif text-brand-gold">4.9/5</p><p className="text-[8px] uppercase tracking-widest text-gray-500">{t.form.trust2}</p></div>
              </div>
            </div>

            <motion.form
              onSubmit={(e) => {
                e.preventDefault();
                setIsSubmitted(true);
                // Notify HubSpot of the form submission
                if (window._hsq) {
                  window._hsq.push(['identify', {
                    email: e.target.email.value,
                    firstname: e.target.firstname.value,
                    phone: e.target.phone.value,
                    address: e.target.address.value,
                    product_interest: e.target.product_interest.value
                  }]);
                  window._hsq.push(['trackEvent', { id: 'Form Submitted' }]);
                }
              }}
              className="bg-white p-8 md:p-10 rounded-[40px] flex flex-col gap-4 shadow-xl"
            >
              <input required name="firstname" type="text" placeholder={t.form.name} className="bg-gray-50 border-none p-4 rounded-2xl text-xs outline-none focus:ring-2 focus:ring-brand-gold transition-all" />
              <input required name="email" type="email" placeholder={t.form.email} className="bg-gray-50 border-none p-4 rounded-2xl text-xs outline-none focus:ring-2 focus:ring-brand-gold transition-all" />
              <input required name="phone" type="tel" placeholder={t.form.phone} className="bg-gray-50 border-none p-4 rounded-2xl text-xs outline-none focus:ring-2 focus:ring-brand-gold transition-all" />
              <textarea required name="address" placeholder={t.form.addr} rows="3" className="bg-gray-50 border-none p-4 rounded-2xl text-xs outline-none focus:ring-2 focus:ring-brand-gold transition-all"></textarea>
              <select required name="product_interest" className="bg-gray-50 border-none p-4 rounded-2xl text-xs outline-none cursor-pointer appearance-none">
                <option value="">{t.form.interest}</option>
                {products.map(p => <option key={p} value={p}>{p}</option>)}
              </select>
              <button type="submit" className="bg-brand-orange text-white py-5 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-brand-brown hover:scale-[1.02] transition-all shadow-lg mt-4">{t.form.submit}</button>
            </motion.form>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isSubmitted && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center px-6">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsSubmitted(false)} className="absolute inset-0 bg-brand-brown/80 backdrop-blur-sm" />
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="relative bg-white rounded-[50px] p-10 md:p-16 max-w-lg w-full text-center shadow-2xl">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6"><CheckCircle2 size={32} className="text-green-500" /></div>
              <h3 className="text-2xl font-serif text-brand-brown mb-4">{t.form.success_t}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-10">{t.form.success_d}</p>
              <button onClick={() => setIsSubmitted(false)} className="w-full bg-brand-brown text-white py-4 rounded-full font-bold uppercase tracking-widest text-[10px]">OK</button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default LeadForm;