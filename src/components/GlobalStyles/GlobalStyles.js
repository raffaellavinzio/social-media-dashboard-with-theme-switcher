import { createGlobalStyle } from "styled-components/macro"

import { COLORS, DARKTHEME, LIGHTTHEME, WEIGHTS } from "../../constants"

const GlobalStyles = createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
    font-size: 100%;
	vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}

ol, ul {
    list-style: none;
}

blockquote, q {
    quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
    content: '';
	content: none;
}

table {
  border-collapse: collapse;
	border-spacing: 0;
}

/* GLOBAL STYLES */

[data-theme="dark"] {
  /* dark them */ 
  --toggle: ${DARKTHEME.darkThemeToggle};
  --bg: ${DARKTHEME.veryDarkBlueBG};
  --top-bg-pattern: ${DARKTHEME.veryDarkBlueTopBG};
  --card-bg: ${DARKTHEME.darkDesaturatedBlue};
  --text: ${DARKTHEME.desaturatedBlue};
  --text-metrics: ${COLORS.white};
  --hover:  ${DARKTHEME.hoverDark};

}

[data-theme="light"] {
    /* light theme */ 
    --toggle: ${LIGHTTHEME.lightThemeToggle};
    --bg: ${COLORS.white};
    --top-bg-pattern: ${LIGHTTHEME.veryPaleBlue};
    --card-bg: ${LIGHTTHEME.lightGrayishBlue};
    --text: ${LIGHTTHEME.darkGrayishBlue};
    --text-metrics: ${LIGHTTHEME.veryDarkBlue};
    --hover: ${LIGHTTHEME.hoverLight};
}

html {
    --font-sans-serif: 'Inter', -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui,
      helvetica neue, helvetica, Ubuntu, roboto, noto, arial, sans-serif;
    --font-serif:
      Iowan Old Style, Apple Garamond, Baskerville, Times New Roman,
      Droid Serif, Times, Source Serif Pro, serif, Apple Color Emoji,
      Segoe UI Emoji, Segoe UI Symbol;
      
    --normal: ${WEIGHTS.normal};
    --medium: ${WEIGHTS.medium};

    --baseline-size: calc(14 / 16 * 1rem);

    /* common colors */ 
    --primary-bright-red: ${COLORS.primaryBrightRed};
    --primary-lime-green: ${COLORS.primaryLimeGreen};
    --facebook: ${COLORS.facebook};
    --twitter: ${COLORS.twitter};
    --instagram: ${COLORS.instagram};
    --youtube: ${COLORS.youtube};
    --common-hover: ${COLORS.commonToggleHover}

}


*,
*:before,
*:after {
  box-sizing: border-box;
  line-height: 1.5;
  font-family: var(--font-sans-serif);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: auto;
  font-synthesis: none;
}

#root {
  /*
    Create a stacking context, without a z-index.
    This ensures that all portal content (modals and tooltips) will
    float above the app.
  */
  isolation: isolate;
}

html {
  /*
    Silence the warning about missing Reach Dialog styles
  */
  --reach-dialog: 1;
}

html, body, #root {
  height: 100%;
}

html {
  /* Set a global default */
  font-family: var(--font-sans-serif);
}
`

export default GlobalStyles
