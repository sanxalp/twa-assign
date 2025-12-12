import pawGif from "../assets/cat_paw.gif";

export default function CatPaw() {
  return (
    <img
      src={pawGif}
      alt="cat paw"
      className="object-contain absolute"
      style={{
        bottom: "0px",
        left: "40px",
        width: "173.45px",
        height: "173.45px",
        transform: "rotate(0deg)",
        opacity: 1,
        zIndex: 900,
        pointerEvents: "none",
      }}
    />
  );
}
