import React, { useState } from 'react';
import { HelpCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import AnimalCard from './components/AnimalCard';
import FisheyeLens from './components/FisheyeLens';
import LanguageSelector from './components/LanguageSelector';

// 自定义爪子图标组件
const PawIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 13.5c-2.5 0-4.5-2-4.5-4.5S9.5 4.5 12 4.5s4.5 2 4.5 4.5-2 4.5-4.5 4.5zm0-7.5c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3z" />
    <path d="M19.5 13.5c-2.5 0-4.5-2-4.5-4.5S17 4.5 19.5 4.5 24 6.5 24 9s-2 4.5-4.5 4.5zm0-7.5c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3zM4.5 13.5C2 13.5 0 11.5 0 9s2-4.5 4.5-4.5S9 6.5 9 9s-2 4.5-4.5 4.5zm0-7.5c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3zM12 22.5c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5zm0-7.5c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3z" />
  </svg>
);

const animals = [
  {
    id: 1,
    nameKey: 'hamster',
    image: './fisheye-pawbabies/images/hamster.jpg',
    video: './fisheye-pawbabies/videos/hamster.mp4',
  },
  {
    id: 2,
    nameKey: 'rabbit', 
    image: './fisheye-pawbabies/images/rabbit.jpg',
    video: './fisheye-pawbabies/videos/rabbit.mp4',
  },
  {
    id: 3,
    nameKey: 'guineaPig',
    image: './fisheye-pawbabies/images/guinea-pig.jpg',
    video: './fisheye-pawbabies/videos/guinea-pig.mp4',
  },
  {
    id: 4,
    nameKey: 'kitten',
    image: './fisheye-pawbabies/images/kitten.jpg',
    video: './fisheye-pawbabies/videos/kitten.mp4',
  },
  {
    id: 5,
    nameKey: 'puppy',
    image: './fisheye-pawbabies/images/puppy.jpg',
    video: './fisheye-pawbabies/videos/puppy.mp4',
  },
  {
    id: 6,
    nameKey: 'ferret',
    image: './fisheye-pawbabies/images/ferret.jpg',
    video: './fisheye-pawbabies/videos/ferret.mp4',
  },
  {
    id: 7,
    nameKey: 'hedgehog',
    image: './fisheye-pawbabies/images/hedgehog.jpg',
    video: './fisheye-pawbabies/videos/hedgehog.mp4',
  },
  {
    id: 8,
    nameKey: 'chinchilla',
    image: './fisheye-pawbabies/images/chinchilla.jpg',
    video: './fisheye-pawbabies/videos/chinchilla.mp4',
  },
  {
    id: 9,
    nameKey: 'parrot',
    image: './fisheye-pawbabies/images/parrot.jpg',
    video: './fisheye-pawbabies/videos/parrot.mp4',
  },
  {
    id: 10,
    nameKey: 'turtle',
    image: './fisheye-pawbabies/images/turtle.jpg',
    video: './fisheye-pawbabies/videos/turtle.mp4',
  },
  {
    id: 11,
    nameKey: 'redPanda',
    image: './fisheye-pawbabies/images/red-panda.jpg',
    video: './fisheye-pawbabies/videos/red-panda.mp4',
  },
  {
    id: 12,
    nameKey: 'otter',
    image: './fisheye-pawbabies/images/otter.jpg',
    video: './fisheye-pawbabies/videos/otter.mp4',
  },
  {
    id: 13,
    nameKey: 'sugarGlider',
    image: './fisheye-pawbabies/images/sugar-glider.jpg',
    video: './fisheye-pawbabies/videos/sugar-glider.mp4',
  },
  {
    id: 14,
    nameKey: 'hamsterBaby',
    image: './fisheye-pawbabies/images/hamster-baby.jpg',
    video: './fisheye-pawbabies/videos/hamster-baby.mp4',
  },
  {
    id: 15,
    nameKey: 'bunnyBaby',
    image: './fisheye-pawbabies/images/bunny-baby.jpg',
    video: './fisheye-pawbabies/videos/bunny-baby.mp4',
  },
  {
    id: 16,
    nameKey: 'penguin',
    image: './fisheye-pawbabies/images/penguin.jpg',
    video: './fisheye-pawbabies/videos/penguin.mp4',
  },
  {
    id: 17,
    nameKey: 'squirrel',
    image: './fisheye-pawbabies/images/squirrel.jpg',
    video: './fisheye-pawbabies/videos/squirrel.mp4',
  },
  {
    id: 18,
    nameKey: 'fox',
    image: './fisheye-pawbabies/images/fox.jpg',
    video: './fisheye-pawbabies/videos/fox.mp4',
  },
  {
    id: 19,
    nameKey: 'seal',
    image: './fisheye-pawbabies/images/seal.jpg',
    video: './fisheye-pawbabies/videos/seal.mp4',
  },
  {
    id: 20,
    nameKey: 'koala',
    image: './fisheye-pawbabies/images/koala.jpg',
    video: './fisheye-pawbabies/videos/koala.mp4',
  }
];

function App() {
  const { t } = useTranslation();
  const [activeAnimal, setActiveAnimal] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [cardPositions] = useState(() => {
    // 生成随机但均匀的位置
    const positions: { x: number; y: number; }[] = [];
    const isMobile = window.innerWidth < 640;
    const cardSize = isMobile ? 100 : 160; // 进一步缩小移动端卡片尺寸
    const centerSize = isMobile ? 300 : 550; // 移动端显著缩小中心区域
    const padding = isMobile ? 40 : 80;  // 移动端进一步减小边距
    const headerSpace = isMobile ? 60 : 100; // 移动端减小顶部空间
    let currentMinDistance = isMobile ? 110 : 180; // 移动端进一步减小卡片间距
    
    const generateCircularPoints = () => {
      const points: { x: number; y: number; }[] = [];
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      // 定义左上角保留区域（Logo 区域）- 移动端增加保护区域
      const logoArea = {
        x: 0,
        y: 0,
        width: isMobile ? 150 : 200,  // 增加移动端 Logo 区域宽度
        height: isMobile ? 150 : 150   // 增加移动端 Logo 区域高度
      };
      
      // 根据屏幕大小调整圆环 - 移动端调整起始位置
      const radiuses = isMobile 
        ? [220, 270, 320, 370, 420] // 增加移动端最小圆环半径
        : [380, 480, 580, 680, 780];
      
      const angleSteps = isMobile
        ? [4, 6, 8, 10, 12] // 减少移动端每个圆环的点位数
        : [6, 8, 10, 12, 14];
      
      // 为每个圆环生成点位
      radiuses.forEach((radius, idx) => {
        const steps = angleSteps[idx];
        const angleOffset = (Math.PI * 2 / steps / 2) * (idx % 2); // 交错排列
        
        for (let i = 0; i < steps; i++) {
          const angle = (Math.PI * 2 / steps * i) + angleOffset;
          
          // 计算基础位置
          let x = centerX + radius * Math.cos(angle);
          let y = centerY + radius * Math.sin(angle);
          
          // 移动端减小随机偏移量
          const randomOffset = isMobile ? 5 : 20;
          x += (Math.random() - 0.5) * randomOffset;
          y += (Math.random() - 0.5) * randomOffset;
          
          // 检查点位是否在有效范围内
          const isInScreen = x > padding && 
                           x < window.innerWidth - padding && 
                           y > headerSpace && 
                           y < window.innerHeight - padding;
          
          // 增加 Logo 区域的安全边距
          const safetyMargin = isMobile ? 20 : 0;
          const isInLogoArea = x < (logoArea.width + safetyMargin) && y < (logoArea.height + safetyMargin);
          
          // 确保点位不会出现在上方区域和 Logo 区域
          const isInTopArea = y < centerY - (isMobile ? 150 : 200);
          
          if (isInScreen && !isInTopArea && !isInLogoArea) {
            points.push({ x, y });
          }
        }
      });
      
      // 调整左侧和右侧点位生成
      const sidePoints: { x: number; y: number; }[] = [];
      const sideAreas = isMobile ? [
        { x: centerX - 180, y: centerY + 80, width: 60, height: 250 }, // 左侧区域向下和向右移动
        { x: centerX + 120, y: centerY + 30, width: 60, height: 300 }  // 右侧区域向下移动
      ] : [
        { x: centerX - 400, y: centerY + 50, width: 150, height: 400 },
        { x: centerX - 400, y: centerY + 50, width: 150, height: 400 }, // 调整左侧起始位置，避开 Logo
        { x: centerX + 250, y: centerY, width: 150, height: 500 }
      ];
      
      sideAreas.forEach(area => {
        for (let i = 0; i < (isMobile ? 8 : 12); i++) {
          const x = area.x + Math.random() * area.width;
          const y = area.y - area.height/2 + Math.random() * area.height;
          
          // 检查是否在 Logo 区域内
          const isInLogoArea = x < logoArea.width && y < logoArea.height;
          
          if (y > headerSpace && y < window.innerHeight - padding && !isInLogoArea) {
            sidePoints.push({ x, y });
          }
        }
      });
      
      // 在底部添加额外的点位，移动端调整区域
      const bottomPoints: { x: number; y: number; }[] = [];
      const bottomArea = isMobile ? {
        x: centerX - 150,
        y: centerY + 150,
        width: 300,
        height: 100
      } : {
        x: centerX - 300,
        y: centerY + 200,
        width: 600,
        height: 150
      };
      
      for (let i = 0; i < (isMobile ? 6 : 10); i++) {
        const x = bottomArea.x + Math.random() * bottomArea.width;
        const y = bottomArea.y + Math.random() * bottomArea.height;
        
        // 检查是否在 Logo 区域内
        const isInLogoArea = x < logoArea.width && y < logoArea.height;
        
        if (y < window.innerHeight - padding && !isInLogoArea) {
          bottomPoints.push({ x, y });
        }
      }
      
      return [...points, ...sidePoints, ...bottomPoints];
    };
    
    const allPoints = generateCircularPoints();
    
    // 优化点位选择算法
    const isValidPosition = (point: { x: number; y: number }, existingPositions: typeof positions) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      // 检查与中心的距离
      const distanceFromCenter = Math.sqrt(
        Math.pow(point.x - centerX, 2) + Math.pow(point.y - centerY, 2)
      );
      
      if (distanceFromCenter < centerSize / 2) {
        return false;
      }
      
      // 检查与其他卡片的距离
      for (const pos of existingPositions) {
        const distance = Math.sqrt(
          Math.pow(point.x - pos.x, 2) + Math.pow(point.y - pos.y, 2)
        );
        if (distance < currentMinDistance) {
          return false;
        }
      }
      
      return true;
    };
    
    // 使用贪心算法选择最佳点位
    const selectBestPoints = (points: typeof allPoints) => {
      const selected: typeof points = [];
      const remaining = [...points];
      
      // 先选择距离中心最远的点
      remaining.sort((a, b) => {
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        const distA = Math.sqrt(Math.pow(a.x - centerX, 2) + Math.pow(a.y - centerY, 2));
        const distB = Math.sqrt(Math.pow(b.x - centerX, 2) + Math.pow(b.y - centerY, 2));
        return distB - distA;
      });
      
      // 选择有效点位
      let attempts = 0;
      const maxAttempts = 3;
      
      while (selected.length < animals.length && attempts < maxAttempts) {
        for (const point of remaining) {
          if (selected.length >= animals.length) break;
          if (isValidPosition(point, selected)) {
            selected.push(point);
          }
        }
        
        // 如果还没有足够的点位，减小间距要求重试
        if (selected.length < animals.length) {
          const minDistanceReduction = 0.9; // 每次减少10%的最小距离
          currentMinDistance *= minDistanceReduction;
          attempts++;
        }
      }
      
      return selected;
    };
    
    // 选择最终点位
    const selectedPoints = selectBestPoints(allPoints);
    return selectedPoints;
  });

  const handleDrop = (animalId: number) => {
    setActiveAnimal(animalId);
    setIsDragging(false);
  };

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <div className="h-screen bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden">
      <div className="h-full relative">
        <LanguageSelector />
        <header className="absolute top-2 sm:top-4 left-1/2 -translate-x-1/2 text-center z-[100]">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2 flex items-center justify-center gap-2 sm:gap-3">
            <div className="relative group">
              <PawIcon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-gray-800/80 transform -rotate-12 group-hover:rotate-12 
                transition-all duration-300 hover:scale-110 group-hover:text-gray-900" />
              <div className="absolute -top-1 -right-1 w-2 sm:w-3 h-2 sm:h-3 bg-gray-400/40 rounded-full animate-ping" />
              <div className="absolute -bottom-1 -left-1 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-gray-300/40 rounded-full animate-ping animation-delay-300" />
            </div>
            <span className="font-['Fredoka'] relative group">
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent drop-shadow-sm
                relative z-10 animate-gradient bg-[length:200%_100%]">
                {t('title').split('').map((letter, index) => (
                  <span
                    key={index}
                    className="inline-block hover:transform hover:scale-110 hover:-rotate-6 transition-transform duration-200 hover:text-pink-400"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {letter}
                  </span>
                ))}
              </span>
              <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500
                transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </span>
            <div className="relative group">
              <button
                className="text-gray-400 hover:text-gray-600 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
                onClick={() => setShowTooltip(!showTooltip)}
                aria-label="Show instructions"
              >
                <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </button>
              {showTooltip && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 p-2 sm:p-3 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg 
                  w-48 sm:w-64 text-xs sm:text-sm text-gray-600 z-50 font-sans border border-purple-100">
                  {t('subtitle')}
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 sm:w-4 h-3 sm:h-4 bg-white transform rotate-45 border-l border-t border-purple-100" />
                </div>
              )}
            </div>
          </h1>
        </header>

        <div className="relative h-full flex items-center justify-center">
          {/* Circular Animal Cards */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="relative w-full h-full">
              {animals.map((animal, index) => (
                <div
                  key={animal.id}
                  style={{
                    position: 'absolute',
                    left: cardPositions[index]?.x,
                    top: cardPositions[index]?.y,
                    transform: 'translate(-50%, -50%)',
                    zIndex: isDragging ? 5 : 10,
                  }}
                  className="w-[100px] sm:w-[140px] md:w-[160px] transition-transform duration-300 hover:scale-110 pointer-events-auto"
                >
                  <AnimalCard
                    animal={{
                      id: animal.id,
                      name: t(`animals.${animal.nameKey}`),
                      image: animal.image,
                      video: animal.video
                    }}
                    onDragStart={handleDragStart}
                    onDragEnd={handleDragEnd}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Center Fisheye Lens */}
          <div className="relative w-[280px] h-[280px] sm:w-[450px] sm:h-[450px] md:w-[550px] md:h-[550px] z-[20]">
            <FisheyeLens
              isDragging={isDragging}
              activeAnimal={animals.find(a => a.id === activeAnimal) ? {
                ...animals.find(a => a.id === activeAnimal)!,
                name: t(`animals.${animals.find(a => a.id === activeAnimal)!.nameKey}`)
              } : undefined}
              t={t}
              onDrop={handleDrop}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;