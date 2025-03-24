import React, { useState, useEffect } from 'react';
import { Camera } from 'lucide-react';

interface Animal {
  id: number;
  nameKey: string;
  name: string;
  image: string;
  video: string;
}

interface FisheyeLensProps {
  isDragging: boolean;
  activeAnimal: Animal | undefined;
  t: (key: string) => string;
  onDrop: (animalId: number) => void;
}

const FisheyeLens: React.FC<FisheyeLensProps> = ({ isDragging, activeAnimal, t, onDrop }) => {
  const [videoError, setVideoError] = useState<string | null>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    if (activeAnimal) {
      console.log('Active animal changed:', activeAnimal);
      setVideoLoaded(false);
      setVideoError(null);
    }

    // 添加自定义事件监听器
    const handleAnimalDropped = (e: CustomEvent) => {
      const animalId = e.detail.animalId;
      if (animalId) {
        console.log('Animal dropped with ID:', animalId);
        onDrop(animalId);
      }
    };

    const lens = document.querySelector('.fisheye-lens');
    if (lens) {
      lens.addEventListener('animal-dropped', handleAnimalDropped as EventListener);
    }

    return () => {
      if (lens) {
        lens.removeEventListener('animal-dropped', handleAnimalDropped as EventListener);
      }
    };
  }, [activeAnimal, onDrop]);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setVideoError(null);
    setVideoLoaded(false);
    
    const animalId = e.dataTransfer.getData('animalId');
    if (animalId) {
      console.log('Dropping animal with ID:', animalId);
      onDrop(parseInt(animalId, 10));
    } else {
      console.error('No animal ID found in drop event');
    }
  };

  return (
    <div className="relative group">
      {/* Outer glow effect */}
      <div className={`
        absolute -inset-4 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500
        rounded-full opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500
        ${isDragging ? 'animate-pulse opacity-40' : ''}
      `} />
      
      {/* Main lens container */}
      <div
        className={`
          fisheye-lens relative aspect-square rounded-full
          shadow-[0_0_50px_rgba(0,0,0,0.2)]
          overflow-hidden transition-all duration-300 transform
          ${isDragging ? 'scale-105 ring-4 ring-purple-500 ring-offset-4' : 'scale-100'}
          before:content-[''] before:absolute before:inset-0
          before:bg-gradient-to-br before:from-white/40 before:via-transparent before:to-black/40
          before:rounded-full before:z-10
        `}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10" />
        
        {/* Lens frame */}
        <div className="absolute inset-0 rounded-full border-[16px] border-gray-900/80
          bg-gradient-to-br from-gray-800/20 to-black/20 pointer-events-none z-20" />
        
        {/* Lens reflections */}
        <div className="absolute inset-0 overflow-hidden rounded-full pointer-events-none z-30">
          <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-br from-white/20 via-transparent to-transparent rotate-12 transform-gpu" />
          <div className="absolute -bottom-1/2 -right-1/2 w-[200%] h-[200%] bg-gradient-to-tl from-white/10 via-transparent to-transparent -rotate-12 transform-gpu" />
        </div>

        {/* Empty state */}
        {!activeAnimal && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center p-4 sm:p-8 relative z-20">
              <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 mx-auto mb-4 rounded-full 
                bg-white/10 backdrop-blur-sm flex items-center justify-center 
                border-2 border-white/30 group-hover:scale-110 transition-transform duration-300">
                <Camera className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white transform group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <p className="text-white text-sm sm:text-base md:text-lg font-medium drop-shadow-lg
                opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                {t('dragHere')}
              </p>
            </div>
          </div>
        )}

        {/* Video content */}
        {activeAnimal && (
          <div className="absolute inset-0 z-[1]">
            {!videoLoaded && !videoError && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-20">
                <div className="text-white text-center">
                  <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-2" />
                  <p className="text-sm font-medium">Loading video...</p>
                </div>
              </div>
            )}
            <div className="absolute inset-0 rounded-full overflow-hidden">
              <video
                key={activeAnimal.video}
                className="absolute w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                onError={(e) => {
                  console.error('Video loading error:', e);
                  console.log('Attempted to load video from:', activeAnimal.video);
                  setVideoError('Error loading video');
                  setVideoLoaded(false);
                }}
                onLoadedData={() => {
                  console.log('Video loaded successfully:', activeAnimal.video);
                  setVideoError(null);
                  setVideoLoaded(true);
                }}
              >
                <source src={activeAnimal.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            {videoError && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm text-white z-20">
                <div className="text-center p-4">
                  <div className="w-12 h-12 mx-auto mb-3 text-red-500">⚠️</div>
                  <p className="text-sm font-medium">{videoError}</p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default FisheyeLens;