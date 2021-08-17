import { createGlobalStyle } from "styled-components/macro"

/* locally hosted google fonts for Red Hat Dispaly 500, 700, 900 */
// CC-in-JS path is not available in runtime
import Inter from "../../fonts/Inter.woff2"

const FontStyles = createGlobalStyle`
@font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 300 900;
    font-display: swap;
    src: url(${Inter}) format('woff2');
  }
`

export default FontStyles
