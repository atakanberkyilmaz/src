import { RadioProvider } from '@/app/contexts/RadioContext';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <RadioProvider>
    <Html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>NGG Medya</title>
      </Head>
      <body className="bg-white text-black">
        <Main />
        <NextScript />
      </body>
    </Html>
    </RadioProvider>
  );
}
