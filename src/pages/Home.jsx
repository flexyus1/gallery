import Header from "../components/Header";
import MenuLateral from "../components/MenuLateral";
import aki from "../images/homePrints/akiHome.jpeg"
import gojo from "../images/homePrints/gojoHome.jpeg"

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
          <h2>My name is Arisha,<br />
            I'm from Russia and I love <br />
            doing anime fanarts for you!</h2>
        </div>
        <img src={gojo} alt="" className="side-image" />
      </div>
      <footer className="home-footer"></footer>
    </>
  )
}