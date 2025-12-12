import pawGif from '../assets/cat_paw.gif';
import bestOfLuckImage from '../assets/image.png';

export default function CatPaw() {
  return (
    <div className="relative">
      <img
        src={pawGif}
        alt="cat paw"
        className="w-16 sm:w-20 md:w-24 lg:w-32 h-16 sm:h-20 md:h-24 lg:h-32 object-contain"
      />
      <img
        src={bestOfLuckImage}
        alt="best of luck"
        className="absolute -top-8 sm:-top-12 md:-top-16 -left-0 sm:-left-4 md:-left-0 w-24 sm:w-32 md:w-40 lg:w-48 object-contain animate-bounce"
        style={{ animationDuration: '2s' }}
      />
    </div>
  );
}
