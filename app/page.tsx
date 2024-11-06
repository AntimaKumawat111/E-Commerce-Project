import Image from "next/image";
import Header from "./header";
import SubHeader from "./container1";
import Rectangle2 from "../public/images/Rectangle2.png"
import Vector from "../public/images/Vector.png";
import Vector2 from "../public/images/Vector2.png";
import versace from "../public/images/versace.png";
 import Zara from "../public/images/zara.png";
import Gucci from "../public/images/gucci.png";
import Prada from "../public/images/prada.png";
import CalvinKlein from "../public/images/calvinKlein.png";
import MainContainer from "./posterLeftContainer";
import Btn from "./Butn";
import Logo from "./page2nd.js/logos";

import Frame1 from "../public/images/frame1.png";

export default function Home() {
  return (
    <>
      <div className="container">
        <div className="page1">
          <Header />
          <SubHeader />
          <Image src={Rectangle2} alt="Poster" id="posterImg" />
          <MainContainer />
          <Image src={Vector} alt="Vector" id="vector" />
          <Btn />
          <Image src={Vector2} alt="Vector" id="vector2" />
        </div>

        <div className="page2">
          <div className="logos">
            <Image
              src={versace}
              alt="Versace"
              id="versaceImg"
              className="logo"
            />
            <Image src={Zara} alt="Zara" id="ZaraImg" className="logo" />
            <Image src={Gucci} alt="Gucci" id="GucciImg" className="logo" />
            <Image src={Prada} alt="Prada" id="PradaImg" className="logo" />
            <Image
              src={CalvinKlein}
              alt="Calvin Klein"
              id="CalvinKleinImg"
              className="logo"
            />
            <h1 id="newArrivals">NEW ARRIVALS</h1>
            <Logo
              id="firshirtImg"
              frameNo={Frame1} // Use Frame1 variable directly
              alternative="frame1"
              style={{
                height: "100%",
                width: "100%",
                zIndex: "4",
                border: "2px solid black",
                backgroundColor: "white",
                opacity: "1",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

{
  /* <Logo
 id={"secondshirtImg"}
 frameNo={Frame2}
 alternative={"frame2"}
/> 
<Logo 
 id={"thirdshirtImg"}
 frameNo={Frame3}
 alternative={"frame3"}
/>
<Logo
 id={"fourthshirtImg"}
 frameNo={Frame4}
 alternative={"frame4"}
/> */
}

// <div className="page3">
//   <h1>Hello world</h1>
// </div>

// <div className="page4">
//   <h1>Hello world</h1>
// </div>

// <div className="page5">
//   <h1>Hello world</h1>
// </div>
