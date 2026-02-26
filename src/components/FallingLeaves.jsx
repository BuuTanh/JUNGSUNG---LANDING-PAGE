import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';

const FallingLeaves = () => {
  // Giảm xuống 20 lá cho thoáng trang web
  const leavesCount = 20;
  
  const leaves = Array.from({ length: leavesCount }).map((_, i) => ({
    id: i,
    size: Math.random() * 10 + 20, // Kích thước từ 20px - 30px cho tinh tế
    left: Math.random() * 100, // Vị trí xuất phát ngẫu nhiên toàn màn hình
    // Rơi sẵn rải rác để không bị tập trung một chỗ
    startY: Math.random() * 120 - 20, 
    // Tăng thời gian rơi (20s - 35s) để lá chuyển động chậm và xa nhau hơn
    duration: Math.random() * 15 + 20, 
    // Tăng độ lượn sóng (swing) để quỹ đạo bay rộng hơn
    swing: Math.random() * 100 + 50, 
    rotateStart: Math.random() * 360,
  }));

  return (
    // z-[5] giúp lá bay sau các nội dung chính z-10
    <div className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden z-[5]">
      {leaves.map((leaf) => (
        <motion.div
          key={leaf.id}
          initial={{ 
            opacity: 0, 
            y: `${leaf.startY}vh`, 
            x: 0,
            rotate: leaf.rotateStart 
          }}
          style={{ 
            left: `${leaf.left}%`, 
            position: 'absolute' 
          }}
          animate={{ 
            opacity: [0, 0.4, 0.4, 0], 
            y: "110vh", 
            // Quỹ đạo bay lượn rộng hơn để tạo khoảng cách
            x: [0, leaf.swing, -leaf.swing, 0], 
            rotate: leaf.rotateStart + 360 
          }}
          transition={{ 
            duration: leaf.duration, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute"
        >
          <img 
            src="/images/la.png" 
            alt="leaf" 
            style={{ 
              width: leaf.size, 
              height: 'auto', 
              filter: 'opacity(0.4) drop-shadow(0 0 3px rgba(0,0,0,0.02))' 
            }} 
          />
        </motion.div>
      ))}
    </div>
  );
};

export default FallingLeaves;