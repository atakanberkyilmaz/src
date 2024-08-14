import { AppProps } from 'next/app';
import { RadioProvider } from '../app/contexts/RadioContext'; // Doğru yolda olduğundan emin olun
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RadioProvider>
      <Component {...pageProps} />
    </RadioProvider>
  );
}

export default MyApp;
