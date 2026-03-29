import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';

const TVCMarTech = () => {
    const { t } = useLanguage();

    return (
        <section id="martech" className="py-24 bg-brand-beige/30">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-serif mb-4 text-brand-brown"
                    >
                        {t.martech.title}
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "80px" }}
                        viewport={{ once: true }}
                        className="h-1 bg-brand-gold mx-auto mb-6"
                    ></motion.div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-gray-600 italic text-sm md:text-base leading-relaxed"
                    >
                        {t.martech.subtitle}
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto rounded-[30px] overflow-hidden shadow-2xl border-8 border-brand-beige/20 bg-brand-beige/10"
                >
                    <div className="aspect-video relative">
                        <video
                            className="w-full h-full object-cover"
                            autoPlay
                            muted
                            loop
                            controls
                            playsInline
                        >
                            <source src="/images/TVC%20MarTech.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default TVCMarTech;
