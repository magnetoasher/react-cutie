import React from "react";
import { injectGlobal } from "styled-components";
import remcalc from "remcalc";
import Home from "./landing-sections/Home";
import UseCases from "./landing-sections/UseCases";
import Tester from "./landing-sections/Tester";
import Install from "./landing-sections/Install";
import Contribute from "./landing-sections/Contribute";

injectGlobal`
  /*! http://devinhunt.github.io/typebase.css/ v0.1.0 | MIT License */
  /* Setup */
  html {
    font-family: 'Source Sans Pro', Arial, Helvetica, sans-serif !important;
    font-size: 120.5%;
    color: #3A3F49;
    -webkit-font-smoothing: antialiased;
  }

  *,
  html {
      box-sizing: border-box;
  }
  *, *:before, *:after {
      box-sizing: inherit;
  }

  #rsg-root {
    a {
      // font-family: 'Source Sans Pro', Arial, Helvetica, sans-serif !important;
      font-weight: 600 !important;
      color: #6168B5;
    }

    /* Copy & Lists */
    p {
      font-size: ${remcalc(16)};
      line-height: 1.5rem;
      margin-top: 0.5rem;
      margin-bottom: 0;
    }
    ul,
    ol {
      margin-top: 1.5rem;
      margin-bottom: 1.5rem;
      font-size: ${remcalc(14)};
    }
    ul li,
    ol li {
      line-height: 1.5rem;
    }
    ul ul,
    ol ul,
    ul ol,
    ol ol {
      margin-top: 0;
      margin-bottom: 0;
    }
    blockquote {
      line-height: 1.5rem;
      margin-top: 1.5rem;
      margin-bottom: 1.5rem;
    }
    /* Headings */
    h2,
    h3,
    h4,
    h5,
    h6 {

      margin-top: 1.5rem;
      margin-bottom: 0;
      line-height: 1.5rem;
    }
    h2 {
      font-size: ${remcalc(28)};
      line-height: 3rem;
      margin-top: 2rem;
    }
    h3 {
      font-size: ${remcalc(20)};
    }
    h4 {
      font-size: ${remcalc(16)};
      font-weight: 600;
    }
    h5 {
      font-size: ${remcalc(14)};
      font-weight: 600;
    }
    h6 {
      font-size: 0.3535rem;
    }
    .lead {
      font-size: ${remcalc(34)};
    }
    .text-top {
      margin-top: 0;
    }
    .text-small {
      font-size: ${remcalc(13)};
    }
    .light {
      color: #fff;
    }
    .text-light {
      font-weight: 300;
    }
  } // #root

`;

const LandingPage = () => (
  <React.Fragment>
    <Home />
    <UseCases />
    <Tester />
    <Install />
    <Contribute />
  </React.Fragment>
);

export default LandingPage;
