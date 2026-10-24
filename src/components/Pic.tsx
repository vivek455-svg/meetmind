import Image from "next/image";
import type { CSSProperties } from "react";
import { images, type ImageKey } from "@/lib/images";

type PicProps = {
  name: ImageKey;
  alt?: string;
  sizes: string;
  className?: string;
  /** Extra positioning for Figma "crop" fills, e.g. { height: "144%", top: "-14%" } */
  crop?: CSSProperties;
  imgClassName?: string;
  priority?: boolean;
  /** Tint shown while the image streams in (or if it has not been fetched yet) */
  tint?: string;
};

/** Fills its (positioned) parent with an optimised image. */
export function Pic({ name, alt = "", sizes, className = "", crop, imgClassName = "", priority, tint = "#dfe9f3" }: PicProps) {
  const img = images[name];
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`} style={{ backgroundColor: tint }}>
      <div className="absolute inset-0" style={crop}>
        <Image
          src={img.src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={`object-cover ${imgClassName}`}
        />
      </div>
    </div>
  );
}
