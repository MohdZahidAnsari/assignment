import SectionForm from "../components/SectionForm";
import SecondaryButton from "../components/SecondaryButton";
import PrimaryButton from "../components/PrimaryButton";
import Dropdown from "../components/Dropdown";
import TextField from "../components/TextField";
import "./Desktop1.css";
const Desktop1 = () => {
  
  return (
    <div className="desktop-1">
      <div className="desktop-1-child" />
      <img className="rectangle-icon" alt="" src="/rectangle@2x.png" />
      <SectionForm />
      <img
        className="zam-nungaray-acw3b7q6ys0-unspl-icon"
        alt=""
        src="/zamnungarayacw3b7q6ys0unsplash@2x.png"
      />
      <img
        className="philipp-arlt-nmh9a0obon8-unspl-icon"
        alt=""
        src="/philipparltnmh9a0obon8unsplash@2x.png"
      />
      <img
        className="philipp-arlt-8eyb-rvawty-unspl-icon"
        alt=""
        src="/philipparlt8eyb-rvawtyunsplash@2x.png"
      />
      <div className="lorem-ipsum-dolor">Fresh</div>
      <div className="lorem-ipsum-dolor1">New products</div>
      <div className="lorem-ipsum-dolor2">Look</div>
      <div className="lorem-ipsum-dolor3">2022</div>
      <div className="apparel">Apparel</div>
      <div className="accessories">Accessories</div>
      <div className="best-sellers">Best sellers</div>
      <div className="off">50% off</div>
      <div className="desktop-1-item" />
      <div className="desktop-1-inner" />
      <img className="icon" alt="" src="/18591063@2x.png" />
      <div className="home"><a href="">HOME</a></div>
      <div className="about"><a href="">ABOUT</a></div>
      <div className="copyright-2022-all">
        Copyright 2022 All Right Reserved By SG
      </div>
      <div className="contact-us"><a href="contact us">Contact Us</a></div>
      <div className="bag-0">BAG (0)</div>
      <div className="wishlist-0">WISHLIST (0)</div>
      <div className="shopkart">ShopKart</div>
      <div className="free-delivery">Free Delivery</div>
      <div className="return-policy">Return Policy</div>
      <div className="login">Login</div>
      <div className="follow-us">Follow US</div>
      <img className="layer-156-icon" alt="" src="/layer-156.svg" />
      <img className="vector-icon2" alt="" src="/vector2.svg" />
      <img className="vector-icon3" alt="" src="/vector3.svg" />
      <img className="vector-icon4" alt="" src="/vector4.svg" />
      <img className="group-icon" alt="" src="/group-6.svg" />
      <div className="line-div" />
      <img className="desktop-1-child1" alt="" src="/group-16.svg" />
      <img className="desktop-1-child2" alt="" src="/group-17.svg" />
      <div className="get-news-about-container">
        <p className="blank-line">&nbsp;</p>
        <p className="blank-line">
          Get news about articles and updates in your inbox.
        </p>
      </div>
      <div className="newslleter">Newslleter</div>
      <div className="name" >NAME  <input type="text"/></div>
      
      <div className="email">EMAIL <input type="email" /></div>
      <div className="message">MESSAGE <input type="text" /></div>
      
      <img className="arrow-icon" alt="" src="/arrow-1.svg" />
      <img className="desktop-1-child3" alt="" src="/arrow-2.svg" />
      <div className="lorem-ipsum-dolor-container">
        <p className="blank-line">{`GET `}</p>
        <p className="blank-line">IN TOUCH</p>
      </div>
      <div className="desktop-1-child4" />
      <div className="desktop-1-child5" />
      <div className="desktop-1-child6" />
      <div className="button">
        <div className="button-child" />
        <div className="send">SEND <div><button type="submit">SEND</button></div></div>
      </div>
      <SecondaryButton
        secondaryButtonPosition="absolute"
        secondaryButtonTop="1275px"
        secondaryButtonLeft="611px"
      />
      <SecondaryButton
        secondaryButtonPosition="absolute"
        secondaryButtonTop="1275px"
        secondaryButtonLeft="941px"
      />
      <SecondaryButton
        secondaryButtonPosition="absolute"
        secondaryButtonTop="1275px"
        secondaryButtonLeft="1272px"
      />
      <img
        className="malicki-m-beser-pkmvkg7vnuo-un-icon"
        alt=""
        src="/malickimbeserpkmvkg7vnuounsplash@2x.png"
      />
      <SecondaryButton
        secondaryButtonPosition="absolute"
        secondaryButtonTop="1275px"
        secondaryButtonLeft="1272px"
      />
      <PrimaryButton
        primaryButtonPosition="absolute"
        primaryButtonTop="696px"
        primaryButtonLeft="115px"
        primaryButtonBorder="1px solid var(--grey-scale-000)"
        primaryButtonBoxSizing="border-box"
      />
      <Dropdown
        dopdown="OUR PRODUCTS"
        dropdownPosition="absolute"
        dropdownTop="115px"
        dropdownLeft="490px"
        dropdownBorder="1px solid var(--grey-scale-000)"
        dropdownBoxSizing="border-box"
      />
      <TextField
        textFieldPosition="absolute"
        textFieldTop="1332px"
        textFieldLeft="346px"
      />
      <TextField
        textFieldPosition="absolute"
        textFieldTop="1332px"
        textFieldLeft="682px"
      />
      <TextField
        textFieldPosition="absolute"
        textFieldTop="1332px"
        textFieldLeft="1012px"
      />
      <TextField
        textFieldPosition="absolute"
        textFieldTop="1332px"
        textFieldLeft="1343px"
      />
    </div>
  );
};

export default Desktop1;

