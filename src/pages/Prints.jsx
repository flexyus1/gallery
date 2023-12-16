import Header from "../components/Header";
import MenuLateral from "../components/MenuLateral";
import aki from "../images/prints/aki.jpeg"
import gojo from "../images/prints/gojo.jpeg"
import akiTwo from "../images/prints/aki2.jpeg"
import ariel from "../images/prints/ariel.jpeg"
import choso from "../images/prints/choso.jpeg"
import fushiguro from "../images/prints/fushiguro.jpeg"
import jinx from "../images/prints/jinx.jpeg"
import makima from "../images/prints/makima.jpeg"
import nobara from "../images/prints/nobara.jpeg"
import nobaraTwo from "../images/prints/nobara2.jpeg"
import power from "../images/prints/power.jpeg"
import quanxi from "../images/prints/quanxi.jpeg"
import rebeka from "../images/prints/rebeka.jpeg"
import rei from "../images/prints/rei.jpeg"
import sona from "../images/prints/sona.jpeg"

export default function Prints(){
  const largeImage = {
    width:"380px"
    
  }
 

  
  return(
    <>
      <Header />
        <div className="left-column">
      <MenuLateral />
      <div className="lacuna">
        <h1 className="title-prints">Ilustrações</h1>
          <div className="container-prints">
              <div className="image">
                     <img src={aki} className="print" alt="" />
                    <div className="content">
                      <p>Aki</p>
                   </div>
                </div>
              <div className="image">
                     <img src={gojo} className="print" alt="" />
                    <div className="content">
                      <p>Gojo</p>
                   </div>
              </div>
              <div className="image">
                     <img src={akiTwo} className="print" alt="" />
                    <div className="content">
                      <p>Aki e Himeno</p>
                   </div>
              </div>
          </div>

          <div className="container-prints">
              <div className="image">
                     <img src={ariel} className="print" alt="" />
                    <div className="content">
                      <p>Ariel</p>
                   </div>
                </div>
              <div className="image">
                     <img src={choso} className="print" alt="" />
                    <div className="content">
                      <p>Choso</p>
                   </div>
              </div>
              <div className="image">
                     <img src={fushiguro} className="print" alt="" />
                    <div className="content">
                      <p>Fushiguro</p>
                   </div>
              </div>
          </div>

          <div className="container-prints">
              <div className="image">
                     <img src={jinx} className="print" alt="" />
                    <div className="content">
                      <p>Jinx</p>
                   </div>
                </div>
              <div className="image">
                     <img src={makima} className="print" alt="" />
                    <div className="content">
                      <p>Makima</p>
                   </div>
              </div>
              <div className="image">
                     <img src={nobara} className="print" alt="" />
                    <div className="content">
                      <p>Nobara</p>
                   </div>
              </div>
          </div>

          <div className="container-prints">
              <div className="image">
                     <img src={nobaraTwo} className="print" alt="" />
                    <div className="content">
                      <p>Nobara</p>
                   </div>
                </div>
              <div className="image">
                     <img src={rebeka} className="print" alt="" />
                    <div className="content">
                      <p>Rebeka</p>
                   </div>
              </div>
              <div className="image">
                     <img src={rei} className="print" alt="" />
                    <div className="content">
                      <p>Rei Ayanami</p>
                   </div>
              </div>
          </div>
          <div className="container-prints">

              <div className="image">
                     <img src={quanxi} className="print" alt="" />
                    <div className="content">
                      <p>Quanxi</p>
                   </div>
              </div>
              <div className="image">
                     <img src={sona} className="print" alt="" />
                    <div className="content">
                      <p>Sona</p>
                   </div>
              </div>
          </div>
          <div className="container-prints large" >
          <div className="image">
                     <img src={power} className="largeImage print " alt="" style={largeImage}/>
                    <div className="content">
                      <p>Power</p>
                   </div>
                </div>
          </div>
         <footer></footer>
         </div>
        </div>{/*lacuna*/} 


    </>
  )
}