const NextButton = ({ text, btnClass }) => {
  return (
    <div className={btnClass + " font-roboto p-2 d-inline align-self-center"} style={{ "borderRadius": "30vw" }}>
      <p className="px-4 my-1 fw-bold m-0 d-inline-flex ">
        {text}
        <i className="bi bi-chevron-compact-right" />
      </p>
    </div>
  )
}

export default NextButton;