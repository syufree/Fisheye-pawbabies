import React, { useState } from 'react';

interface Animal {
  id: number;
  name: string;
  image: string;
  video: string;
}

interface AnimalCardProps {
  animal: Animal;
  onDragStart: () => void;
  onDragEnd: () => void;
}

const AnimalCard: React.FC<AnimalCardProps> = ({ animal, onDragStart, onDragEnd }) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragStart = (e: React.DragEvent) => {
    e.dataTransfer.setData('animalId', animal.id.toString());
    e.dataTransfer.effectAllowed = 'copy';
    setIsDragging(true);
    onDragStart();
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    // 防止触摸时页面滚动
    e.preventDefault();
    setIsDragging(true);
    onDragStart();
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    
    e.preventDefault();
    const touch = e.touches[0];
    const dropTarget = document.elementFromPoint(touch.clientX, touch.clientY);
    
    // 查找最近的可放置目标
    const fisheyeLens = dropTarget?.closest('.fisheye-lens');
    
    // 更新卡片位置跟随手指
    const card = e.currentTarget as HTMLDivElement;
    card.style.position = 'fixed';
    card.style.left = `${touch.clientX}px`;
    card.style.top = `${touch.clientY}px`;
    card.style.transform = 'translate(-50%, -50%)';
    card.style.zIndex = '1000';
    
    // 高亮放置区域
    if (fisheyeLens) {
      fisheyeLens.classList.add('drag-over');
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    e.preventDefault();
    setIsDragging(false);
    onDragEnd();

    const touch = e.changedTouches[0];
    const dropTarget = document.elementFromPoint(touch.clientX, touch.clientY);
    const fisheyeLens = dropTarget?.closest('.fisheye-lens');
    
    // 重置卡片样式
    const card = e.currentTarget as HTMLDivElement;
    card.style.position = '';
    card.style.left = '';
    card.style.top = '';
    card.style.transform = '';
    card.style.zIndex = '';
    
    // 如果放在鱼眼镜头上，触发放置事件
    if (fisheyeLens) {
      fisheyeLens.classList.remove('drag-over');
      const event = new CustomEvent('animal-dropped', {
        detail: { animalId: animal.id }
      });
      fisheyeLens.dispatchEvent(event);
    }
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      onDragEnd={onDragEnd}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="relative group cursor-move touch-none"
    >
      <div className="relative overflow-hidden rounded-lg transition-transform duration-300 group-hover:scale-105">
        <img
          src={animal.image}
          alt={animal.name}
          className="w-full h-full object-cover"
          draggable={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </div>
  );
};

export default AnimalCard;