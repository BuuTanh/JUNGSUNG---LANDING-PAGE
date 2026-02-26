import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const notifications = [
  { id: 1, name: "Nguyễn Huy", action: "vừa đặt 1", product: "Delicious Cube" },
  { id: 2, name: "Minh Anh", action: "đã đăng ký nhận", product: "Mẫu thử miễn phí" },
  { id: 3, name: "Trần Thu Thảo", action: "vừa mua", product: "Combo Nước dùng gà" },
  { id: 4, name: "Hoàng Nam", action: "vừa đặt 2", product: "Kelp Soy Sauce" },
];

const NotificationPopup = () => {
const { t } = useLanguage(); // Lấy bộ dịch

  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Cứ 8 giây thì hiện lên 1 lần, mỗi lần hiện 4 giây rồi ẩn
    const interval = setInterval(() => {
      setShow(true);
      setTimeout(() => setShow(false), 4000); 
      setIndex((prev) => (prev + 1) % notifications.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 20 }}
          exit={{ opacity: 0, x: -50 }}
          className="fixed bottom-10 left-0 z-[100] bg-white shadow-2xl rounded-2xl p-4 flex items-center gap-4 border border-brand-gold/20 w-[280px]"
        >
          <div className="bg-brand-orange/10 p-3 rounded-full text-brand-orange">
            <ShoppingBag size={20} />
          </div>
          <div className="flex-1">
            <p className="text-sm font-bold text-brand-brown">
              {notifications[index].name} <span className="font-normal text-gray-500">{notifications[index].action}</span>
            </p>
            <p className="text-xs font-semibold text-brand-orange truncate">
              {notifications[index].product}
            </p>
          </div>
          <button onClick={() => setShow(false)} className="text-gray-300 hover:text-gray-500 text-xs">✕</button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NotificationPopup;