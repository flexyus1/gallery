import { Link} from "react-router-dom";

export default function Header(){

  return(
    <>
      <div className="container-head">
        <Link to={"/"} className="nav-link" >Inicio</Link>
        <Link to={"/prints"} className="nav-link" >Imagens</Link>
      </div>
    </>
  )
}