import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { AuthProvider } from '../context/auth';
import Layout from '../components/layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // ここに設置して全体の親にします
    <AuthProvider>
      <Layout>
      <Component {...pageProps} /> 
      {/* // 各ページのコンポーネントがここに入ります */}
      </Layout>
    </AuthProvider>
  );
}

export default MyApp;