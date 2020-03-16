import { createGlobalStyle } from "styled-components";
import Stats from "../components/Stats";
import CountrySelector from "../components/CountrySelector";

const GlobalStyle = createGlobalStyle`
  html {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

export default function IndexPage() {
  return (
    <div>
      <GlobalStyle />
      <h1>Totals: </h1>
      <Stats url="https://covid19.mathdro.id/api" />
      <CountrySelector />
    </div>
  );
}
