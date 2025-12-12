import bestOfLuckImage from "../assets/image.png";

export default function BestOfLuck() {
  return (
    <img
      src={bestOfLuckImage}
      alt="best of luck"
      className="absolute z-[2000] w-[180px] object-contain pointer-events-none"
      style={{
        bottom: "150px",
        left: "-80px",
        animation: "bounce 2s infinite",
      }}
    />
  );
}
