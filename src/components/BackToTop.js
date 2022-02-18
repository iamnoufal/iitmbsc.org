import { useState, useEffect } from "react";

const BackToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset>300) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    }, [])
  })
  const scrollToTop = () => window.scrollTo({top: 0, behaviour:"smooth"})
  const style = {
    position: "fixed",
    right: "1rem",
    bottom: "1rem",
    width: "3rem",
    height: "3rem",
    borderRadius: "50%"
  }
  return <>{showTopBtn && (<div className="btn bg-color-maroon text-color-gold fw-bold p-0 pt-2 fs-4" style={style} onClick={scrollToTop}>^</div>)}</>
}

export default BackToTop;