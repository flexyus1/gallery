import { Link} from "react-router-dom";

export default function Header(){

  return(
    <>
      <div className="container-head">
        <Link to={"/"} className="nav-link" >Home</Link>
        <Link to={"/prints"} className="nav-link" >Prints</Link>
        <Link to={"/info"} className="nav-link" >Info</Link>
      </div>
    </>
  )
}