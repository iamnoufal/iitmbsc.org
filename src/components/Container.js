const Container = ({ children, bgColor }) => {
  return (
    <div className={bgColor}>
      <div className="mx-lg-5 px-lg-5 py-4">
        <div className="mx-lg-5 mx-3 px-lg-5">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Container;