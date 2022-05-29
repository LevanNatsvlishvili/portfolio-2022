import '../Styles/global.css';
import Layout from 'Layout';
import { StoreContextProvider } from 'Store/Context';
// import RenderRoutes from 'Routing/Routing';

function App({ Component, pageProps }) {
  return (
    <StoreContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StoreContextProvider>
  );
}

export default App;
