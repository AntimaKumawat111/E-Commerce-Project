import Image from "next/image";
import Header from "./Header";
import SubHeader from "./Container1";
import Rectangle2 from "../public/images/Rectangle2.png";
import Vector from "../public/images/Vector.png";
import Vector2 from "../public/images/Vector2.png";
import versace from "../public/images/Versace.png";
import Zara from "../public/images/zara.png";
import Gucci from "../public/images/gucci.png";
import Prada from "../public/images/prada.png";
import CalvinKlein from "../public/images/CalvinKlein.png";
import MainContainer from "./posterLeftContainer";
import Btn from "./Butn";

function Photo({ cardNo, id, imagesrc, pvalue, rate }: any) {
  return (
    <div className="cards" id={cardNo}>
      <div className="card">
        <img src={imagesrc} alt="product" className="card_img" id={id} />
        <div className="card_info">
          <a href="" target="_blank">
            <p id="ptitle">{pvalue}</p>
            <p id="pstars">stars</p>
            <p id="prate">${rate}</p>
          </a>
        </div>
      </div>
    </div>
  );
}

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

        
      </div>
    </>
  );
}

// {
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
// }

// <div className="page3">
//   <h1>Hello world</h1>
// </div>

// <div className="page4">
//   <h1>Hello world</h1>
// </div>

// <div className="page5">
//   <h1>Hello world</h1>
// </div>
