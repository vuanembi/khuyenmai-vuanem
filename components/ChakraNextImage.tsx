import { Box, BoxProps } from '@chakra-ui/react';
import NextImage from 'next/image';

type ChakraNextImageProps = BoxProps & {
    src: string;
    alt: string;
};

export const ChakraNextImage = (props: ChakraNextImageProps) => {
    const { src, alt, ...rest } = props;

    return (
        <Box width="100%" height="100%" position="relative">
            <NextImage
                layout="responsive"
                src={src}
                alt={alt}
                width={500}
                height={500}
            />
        </Box>
    );
};
