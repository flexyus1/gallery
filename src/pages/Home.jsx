import Header from "../components/Header";
import MenuLateral from "../components/MenuLateral";
import aki from "../images/homePrints/akiHome.jpeg"
import gojo from "../images/homePrints/gojoHome.jpeg"
import ig from "../images/igColor.svg"
import twitter from "../images/twitterColor.svg"

export default function Home(){
  return(
    <>
      <Header/>
      <MenuLateral/>
      <h1 className="title-home">Felps</h1>
      <div className="container-home">
        <img src={aki} alt="" className="side-image" />
        <div className="centralized-text">
          <h2>Hi!</h2>
          <h2>Me chamo fellype,<br /> e amo fazer arte e fanarts,<br /> e aqui você pode adquirir <br /> produtos do meu trabalho! <br />
             espero que eles chamem <br /> a atenção de vocês!!</h2>
          <h3>Entre em contato pelas redes sociais:</h3>
          <a href="https://www.instagram.com/drawing.felps/" target="_blank"><img src={ig} className="socialIcon" /></a> 
          <a href="https://x.com/drawingfelps?s=20" target="_blank"><img src={twitter} className="socialIcon" /></a>
        </div>
        <img src={gojo} alt="" className="side-image" />
      </div>
      <footer className="home-footer"></footer>
    </>
  )
}