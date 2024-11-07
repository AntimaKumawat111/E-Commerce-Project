import Image from "next/image";
import Header from "./Header";
// import SubHeader from "./Container1";
import Rectangle2 from "../public/images/Rectangle2.png";
import Vector from "../public/images/Vector.png";
import Vector2 from "../public/images/Vector2.png";
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
          {/* <SubHeader /> */}
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
