// import SearchIcon from "@mui/icons-material/Search";
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function SubHeader() {
  return (
    <div className="sub-header">
      <div className="box">
        <h1 id="shop">SHOP.CO</h1>
        <div className="ancherTag">
          <a href="#" className="tags" id="shopTaag">Shop</a>
          <KeyboardArrowDownIcon id="downArrow" />
          <a href="#" className="tags">On Sale</a>
          <a href="#" className="tags">New Arrivals</a>
          <a href="#" className="tags">Brands</a>
        </div>
      </div>
      {/* <div className="inputdiv">
        <SearchIcon id="searchIcon" />
        <input placeholder="Search for products..." id="inputbox" />
      </div> */}
      <ProductionQuantityLimitsIcon id="cartIcon" />
      <PersonOutlineIcon id="profileIcon" />
    </div>
  );
}
