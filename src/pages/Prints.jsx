import Header from "../components/Header";
import MenuLateral from "../components/MenuLateral";
import aki from "../images/prints/aki.jpeg"
import gojo from "../images/prints/gojo.jpeg"
import akiTwo from "../images/prints/aki2.jpeg"
import ariel from "../images/prints/ariel.jpeg"
import choso from "../images/prints/choso.jpeg"
import fushiguro from "../images/prints/fushiguro.jpeg"
import jinx from "../images/prints/jinx.jpeg"
import makina from "../images/prints/makina.jpeg"
import nobara from "../images/prints/nobara.jpeg"
import nobaraTwo from "../images/prints/nobara2.jpeg"
import power from "../images/prints/power.jpeg"
import quanxi from "../images/prints/quanxi.jpeg"

export default function Prints(){
  return(
    <>
      <Header />
        <div className="left-column">
      <MenuLateral />
        <h1 className="title-prints">Avaiable Prints</h1>
          <div className="container-prints">
            <img src={aki} className="print" alt="" />
            <img src={gojo} className="print" alt="" />
            <img src={akiTwo} className="print" alt="" />
          </div>
          <div className="container-prints">
            <img src={ariel} className="print" alt="" />
            <img src={choso} className="print" alt="" />
            <img src={fushiguro} className="print" alt="" />
          </div>
          <div className="container-prints">
            <img src={jinx} className="print" alt="" />
            <img src={makina} className="print" alt="" />
            <img src={nobara} className="print" alt="" />
          </div>
          <div className="container-prints">
            <img src={nobaraTwo} className="print" alt="" />
            <img src={power} className="print" alt="" />
            <img src={quanxi} className="print" alt="" />
          </div>


      </div>
      <footer></footer>
    </>
  )
}