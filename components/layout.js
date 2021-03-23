import React, {useState} from "react";
import Head from "next/head";
import Link from "next/link";

// Components
import DesktopNavbar from './Navbar/Desktop';
import MobileNavbar from './Navbar/Mobile'

import Banner from './Banner';
import TextBlock from './Blocks/SimpleText';
import TextImg from './Blocks/TextImg';
import Grid from './Grid';

import Gallery from './Gallery';

import Features from './Products/Features';

import Footer from './Footer';

// Data import
import {lunchSetText, presentationText, happyHourText} from '../datas/text';

import {lunchSetImg, happyHourImg, arrayImg, arrayImg2} from '../datas/img';

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

        <div className="textImg">
          <TextImg text={lunchSetText()} img={lunchSetImg}/>
        </div>

        <div className="textImg">
          <TextImg text={happyHourText()} img={happyHourImg}/>
        </div>

        <div className="textBlock greyBg">
          <TextBlock text={presentationText()}/>
        </div>
        

        {/* <div className="grid">
          <Grid />
        </div> */}
        
        <div className="block flex">
          <div className="gallery two-column">
            <Gallery images={arrayImg} />
            <Gallery images={arrayImg2} />
          </div>
          <div className="gallery two-column">
            <Gallery images={arrayImg2} />
            <Gallery images={arrayImg} />
          </div>
        </div>

        <div className="block flex align-items-center">
          <Features image={happyHourImg}/>
        </div>
        

        <div className="container">{props.children}</div>

        <footer>
          <Footer />
        </footer>
      </header>
    </div>
  )
}