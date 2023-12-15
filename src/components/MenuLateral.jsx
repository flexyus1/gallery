import ig from "../images/ig.svg"
import twitter from "../images/twitter.svg"

export default function MenuLateral(){
  return(
    <>
    <div className="lateral">
      <a href="" target="_blank" ><img src={ig} alt="" className="lateral-icon" /></a>
      <a href="" target="_blank" ><img src={twitter} alt="" className="lateral-icon" /></a>
    </div>
    </>
  )
}