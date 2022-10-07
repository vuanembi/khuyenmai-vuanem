import { Flex, LinkBox, LinkOverlay, Button } from '@chakra-ui/react';

import { ChakraNextImage } from '../../../components/ChakraNextImage';

type ProductProps = {
    src: string;
    href: string;
    alt: string;
};

export const Product = ({ src, href, alt }: ProductProps) => (
    <LinkBox>
        <Flex
            as={LinkOverlay}
            flex="1"
            flexDirection="column"
            alignItems="stretch"
            href={href}
            isExternal
        >
            <ChakraNextImage src={src} alt={alt} />
            <Button
                size="sm"
                textColor="#FFFFFF"
                backgroundColor="#172A35"
                mt={-1}
                borderRadius={0}
                _focus={{
                    textColor: '#FFFFFF',
                    backgroundColor: '#172A35',
                }}
            >
                Mua ngay
            </Button>
        </Flex>
    </LinkBox>
);
