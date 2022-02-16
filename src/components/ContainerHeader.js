import NextButton from "./NextButton";
import { Link } from "react-router-dom";

const ContainerHeader = ({ children, btnText="", to="", btnClass="" }) => {
  return (
    <div className="font-righteous d-flex">
      <div className="mw-50 text-uppercase">
        {children}
      </div>
      {btnText && (<div className="d-none d-lg-flex mw-50 justify-content-end my-auto">
        <Link to={to} style={{textDecoration: "none"}}>
          <NextButton text={btnText} btnClass={btnClass} />
        </Link>
      </div>)}
    </div>
  )
}

export default ContainerHeader;