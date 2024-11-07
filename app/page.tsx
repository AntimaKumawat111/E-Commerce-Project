import Image from "next/image";
// import Header from "./Header";
// import Header from "./Header";
import Header from "./Header";
// import SubHeader from "./Container1";
import Rectangle2 from "../public/images/Rectangle2.png";
import Vector from "../public/images/Vector.png";
import Vector2 from "../public/images/Vector2.png";
import MainContainer from "./posterLeftContainer";
import Btn from "./Butn";

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
