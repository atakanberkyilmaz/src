import { AppProps } from 'next/app';
import { RadioProvider } from './contexts/RadioContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RadioProvider>
      <Component {...pageProps} />
    </RadioProvider>
  );
}

export default MyApp;
