import React, {useState} from "react";
import Head from "next/head";
import Link from "next/link";

// Components
import DesktopNavbar from './Navbar/Desktop';
import MobileNavbar from './Navbar/Mobile'

import Banner from './Banner';
import TextBlock from './TextBlock';

import Footer from './Footer';

export default function Layout(props) {
  const title = "Welcome to the restaurant L'émotion !"
  
  const [mobMenu, setMobMenu] = useState(false);


  return (
    <div>

      <head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <script src="https://js.stripe.com/v3" />
      </head>

      <header>

        <div id="header2">
          <DesktopNavbar setMobMenu={setMobMenu} mobMenu={mobMenu}/>

          <MobileNavbar setMobMenu={setMobMenu} mobMenu={mobMenu}/>
        </div>

        <div className="banner">
          <Banner />
        </div>

        <div className="banner">
          <TextBlock />
        </div>

        <div className="container">{props.children}</div>

        <footer>
          <Footer />
        </footer>
      </header>
    </div>
  )
}