import { PortfolioProvider } from "@/content/content";
import { prefix } from "@/config/config";
import GlobalStyle from "@/styles/global.styles";

export default function App({ Component, pageProps }) {
    return (
        <PortfolioProvider value={{ prefix }}>
            <GlobalStyle />
            <Component {...pageProps} />
        </PortfolioProvider>
    );
}
