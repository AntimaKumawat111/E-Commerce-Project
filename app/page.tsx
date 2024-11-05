import Header from "./header";
import FirstContanir from "./container1";
import SubHeader from "./container1"; // Import if it's in a separate file

export default function Home() {
    return (
        <>
            <div className="container">
                <div className="page1">
                    <Header />
                    <SubHeader /> {/* Add SubHeader below Header */}
                    {/* <FirstContanir /> */}
                </div>
            </div>
        </>
    );
}


        {/* <div className="page2">
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
      </div> */}