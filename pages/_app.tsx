import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { ChakraProvider } from '@chakra-ui/react';

type PageProps = {
    title: string;
};

const App = ({ Component, pageProps }: AppProps<PageProps>) => (
    <>
        <DefaultSeo
            title={pageProps.title}
            titleTemplate="%s | Vua Nệm"
            additionalLinkTags={[
                {
                    rel: 'icon',
                    href: 'https://vuanem.com/image/favicon_1.ico',
                },
            ]}
        />
        <ChakraProvider>
            <Component {...pageProps} />
        </ChakraProvider>
    </>
);

export default App;
