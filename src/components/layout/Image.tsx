import React from 'react';
import { Image as ChakraImage, Img as ChakraImg } from "@chakra-ui/image";
import type { StaticImageData } from 'next/image';
import type { ImageProps as ChakraImageProps } from "@chakra-ui/image";

interface ImageProps extends Omit<ChakraImageProps, "src"> {
    src?: string | StaticImageData;
}

interface ImageData {
    src?: string;
    fallbackSrc?: string;
    htmlWidth?: string | number;
    htmlHeight?: string | number;
}

const getImageData = (src?: string | StaticImageData): ImageData => (
    typeof src === "object" ? {
        src: src.src,
        fallbackSrc: src.blurDataURL,
        htmlWidth: src.width,
        htmlHeight: src.height
    } : { src }
);

const Image = ({ src, ...props }: ImageProps) => {

    const imageData = getImageData(src);

    return window === undefined ? <ChakraImg
        {...imageData}
        {...props}
    /> : <ChakraImage
        {...imageData}
        {...props}
    />;
};

export default Image;