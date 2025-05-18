// components/SlidingImage.tsx
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function SlidingImage({ src, alt, width, height, className }) {
  const [images, setImages] = useState([{ key: Date.now(), src }]);

  useEffect(() => {
    if (images[0].src !== src) {
      setImages([{ key: Date.now(), src }]);
    }
  }, [src]);

  return (
    <div style={{ position: "relative", width, height, overflow: "hidden" }}>
      <AnimatePresence>
        {images.map((image) => (
          <motion.div
            key={image.key}
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width,
              height,
            }}
          >
            <Image
              className={className}
              src={image.src}
              alt={alt}
              width={width}
              height={height}
              style={{ objectFit: "cover" }}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
