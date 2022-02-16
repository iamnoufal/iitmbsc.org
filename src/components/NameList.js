const NameList = ({list}) => {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {list.map((member) => {
        return (
          <div className="card m-1 border-0" key={member.house}>
            <img src="https://149362210.v2.pressablecdn.com/wp-content/uploads/2018/04/img-placeholder-rectangle.jpg" alt={member.name} style={{borderRadius: "50%", width: "150px", height: "150px"}} className="card-img-top, mx-auto, mx-md-5" />
            <div className="card-body text-center">
              <h5 className="card-title font-righteous text-color-gold">{member.name}</h5>
              <p className="card-text">{member.house}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default NameList;