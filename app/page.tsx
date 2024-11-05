import Image from "next/image";
import Header from "./header";
import SubHeader from "./container1";
import Rectangle2 from "./images/Rectangle2.png";
import Vector from "./images/Vector.png";
import MainContainer from "./posterLeftContainer";
// import Btn from "./posterLeftContainer";
import Btn from "./Butn";

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
        </div>
      </div>
    </>
  );
}

{
  /* <div className="page2">
        <h1>Hello world</h1>
      </div>

      <div className="page3">
        <h1>Hello world</h1>
      </div>

      <div className="page4">
        <h1>Hello world</h1>
      </div>

      <div className="page5">
        <h1>Hello world</h1>
      </div> */
}
