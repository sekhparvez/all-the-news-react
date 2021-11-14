import React from "react";
import {Head} from "./styles";


const Header = ({siteTitle}) => {
  return (
    <Head>
      <h1>{siteTitle}</h1>
    </Head>
  );
};

export default Header;
