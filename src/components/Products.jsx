import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';

const Products = () => {
  const { t } = useLanguage();

  const productList = [
    { id: 1, name: t.products.p1, desc: t.products.p1_d, tag: "Best Seller", link: "https://www.full-jungsung.com/product/%EA%B5%AD%EB%82%B4%EC%82%B0-100-%ED%91%9C%EA%B3%A0%EB%B2%84%EC%84%AF-%EB%B6%84%EB%A7%90-30g/14/" },
    { id: 2, name: t.products.p2, desc: t.products.p2_d, tag: "Trial Size", link: "https://www.full-jungsung.com/product/%EC%A0%95%EC%84%B1%EA%B9%83%EB%93%A0-%EC%9A%94%EB%A6%AC-%EB%9A%9D%EB%94%B1-%EB%A7%9B%EC%9E%88%EB%8A%94-%ED%81%90%EB%B8%8C%ED%95%B4%EB%AC%BC/34/" },
    { id: 3, name: t.products.p3, desc: t.products.p3_d, tag: "New", link: "https://www.full-jungsung.com/product/%EC%A0%95%EC%84%B1%EA%B9%83%EB%93%A0-%EB%8B%A4%EC%8B%9C%EB%A7%88-%EB%A7%9B%EA%B0%84%EC%9E%A5/36/" },
    { id: 4, name: t.products.p4, desc: t.products.p4_d, tag: "Premium", link: "https://www.full-jungsung.com/product/%EC%A0%95%EC%84%B1%EA%B9%83%EB%93%A0-%EA%B5%AD%EB%82%B4%EC%82%B0-%EB%8B%AD%EA%B3%A0%EA%B8%B0-%EC%B9%98%ED%82%A8%EC%8A%A4%ED%86%A1-%ED%8C%8C%EC%9A%B0%EB%8D%94-100g/42/" },
    { id: 5, name: t.products.p5, desc: t.products.p5_d, tag: "Eco-friendly", link: "https://www.full-jungsung.com/product/%EC%B2%9C%EC%97%B0%ED%95%B4%EB%AC%BC%EB%8B%A4%EC%8B%9C%ED%8C%A9-100-%EA%B5%AD%EB%82%B4%EC%82%B0/19/" }
  ];

  return (
    <section id="products" className="py-24 bg-white">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-serif mb-4 text-brand-brown leading-tight">{t.products.title}</h2>
            <p className="text-gray-500 italic text-sm">{t.products.subtitle}</p>
          </div>
          <a href="https://www.full-jungsung.com" target="_blank" className="text-brand-brown font-bold border-b-2 border-brand-brown/10 pb-2 hover:border-brand-orange transition-colors uppercase tracking-widest text-[10px]">{t.products.view_all}</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {productList.map((product, index) => (
            <motion.div key={product.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} viewport={{ once: true }} className="group flex flex-col h-full">
              <div className="bg-brand-beige aspect-[4/5] rounded-[30px] overflow-hidden mb-6 relative border border-transparent group-hover:border-brand-gold/30 transition-all shadow-sm">
                <img src={`/src/assets/images/product-${product.id}.png`} className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-700" alt={product.name} />
                <span className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-[8px] font-bold uppercase tracking-widest text-brand-orange shadow-sm">{product.tag}</span>
              </div>
              <div className="flex flex-col flex-1">
                <h3 className="text-base font-bold text-brand-brown mb-2 group-hover:text-brand-orange transition-colors h-12 flex items-center leading-tight">{product.name}</h3>
                <p className="text-gray-400 text-[11px] mb-6 leading-relaxed h-10">{product.desc}</p>
                <a href={product.link} target="_blank" className="w-full bg-brand-beige/50 border border-brand-brown/5 py-3 rounded-2xl text-[10px] font-bold uppercase tracking-widest text-center text-brand-brown group-hover:bg-brand-brown group-hover:text-white transition-all">{t.products.details}</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;