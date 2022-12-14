import { useEffect } from 'react';
import { NextSeo } from 'next-seo';
import {
    Container,
    HStack,
    VStack,
    SimpleGrid,
    Center,
    Heading,
    Text,
} from '@chakra-ui/react';
import useCountDown from 'react-countdown-hook';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

import styles from '../styles/mega-sales-10-10.module.scss';
import { ChakraNextImage } from '../components/ChakraNextImage';
import { Product } from '../features/mega-sales-10-10/components/Product';

dayjs.extend(duration);

const DealHot = () => {
    const [timeleft, { start }] = useCountDown(60 * 60 * 8 * 1000, 1000);

    useEffect(() => {
        start();
    }, []);

    return (
        <HStack
            className={styles['countdown-bar']}
            justifyContent="space-between"
            p={2}
        >
            <Heading>Deal Hot</Heading>
            <VStack spacing="0px" alignItems="flex-end">
                <Text fontSize="20px">Sắp kết thúc</Text>
                <Heading textTransform="uppercase">
                    {dayjs.duration(timeleft).format('HH:mm:ss')}
                </Heading>
            </VStack>
        </HStack>
    );
};

type CountdownProps = {
    title: string;
};
const Countdown = ({ title }: CountdownProps) => (
    <Center className={styles['countdown-bar']} p={2}>
        <Heading textTransform="uppercase">{title}</Heading>
    </Center>
);

const MegaSales1010 = () => (
    <>
        <NextSeo
            openGraph={{
                type: 'website',
                url: 'https://khuyenmai2.vuanem.com/mega-sales-10-10',
                title: 'Mega Sales 10-10 - Vua Nệm',
                description: 'Mega Sales 10-10 với ngàn ưu đãi',
                images: [
                    {
                        url: '/mega-sales-10-10/product/banner-1.png',
                        width: 500,
                        height: 500,
                        alt: 'Banner',
                    },
                ],
            }}
            twitter={{
                handle: '@avneesh0612',
                site: '@avneesh0612',
                cardType: 'summary_large_image',
            }}
        />
        <Container maxW="md" backgroundColor="white" pb="32px">
            <VStack alignItems="stretch" spacing="1rem">
                <ChakraNextImage
                    src="/mega-sales-10-10/product/banner-1.png"
                    alt="Mega Sales 10-10"
                />
                <VStack alignItems="stretch" spacing="1rem">
                    <DealHot />
                    <SimpleGrid columns={2} spacing="1rem">
                        <Product
                            src="/mega-sales-10-10/product/comodo-1.png"
                            alt="Comodo"
                            href="https://vuanem.com/nem-foam-amando-comodo-luxury.html"
                        />
                        <Product
                            src="/mega-sales-10-10/product/evita-1.png"
                            alt="Evita"
                            href="https://vuanem.com/nem-lo-xo-dunlopillo-evita.html"
                        />
                        <Product
                            src="/mega-sales-10-10/product/gummi-legend-1.png"
                            alt="Gummi Legend"
                            href="https://vuanem.com/nem-cao-su-gummi-legend.html"
                        />
                        <Product
                            src="/mega-sales-10-10/product/lamore-1.png"
                            alt="L'Amore"
                            href="https://vuanem.com/nem-foam-amando-l-amore.html"
                        />
                    </SimpleGrid>
                </VStack>
                <VStack alignItems="stretch" spacing="1rem">
                    <Countdown title="Mega Sale Shock" />
                    <Product
                        src="/mega-sales-10-10/product/faro-1.png"
                        alt="Faro"
                        href="https://vuanem.com/nem-lo-xo-amando-faro.html"
                    />
                </VStack>
                <VStack alignItems="stretch" spacing="1rem">
                    <Countdown title="Nệm ấm giá êm" />
                    <SimpleGrid columns={2} spacing="1rem">
                        <Product
                            src="/mega-sales-10-10/product/gummi-latex-1.png"
                            alt="Gummi Latex"
                            href="https://vuanem.com/nem-cao-su-gummi-latex-7zones.html"
                        />
                        <Product
                            src="/mega-sales-10-10/product/luca-1.png"
                            alt="Luca"
                            href="https://vuanem.com/nem-foam-amando-luca.html"
                        />
                    </SimpleGrid>
                </VStack>
                <VStack alignItems="stretch" spacing="1rem">
                    <Countdown title="Siêu Sale Phụ Kiện" />
                    <SimpleGrid columns={2} spacing="1rem">
                        <Product
                            src="/mega-sales-10-10/product/flora-1.png"
                            alt="Flora"
                            href="https://vuanem.com/chan-chan-amando-flora.html"
                        />
                        <Product
                            src="/mega-sales-10-10/product/doona-bamboo-1.png"
                            alt="Comodo"
                            href="https://vuanem.com/bao-ve-nem-doona-bamboo-chong-tham.html"
                        />
                    </SimpleGrid>
                </VStack>
            </VStack>
        </Container>
    </>
);

export const getStaticProps = async () => ({
    props: {
        title: 'Mega Sales 10-10',
    },
});

export default MegaSales1010;
