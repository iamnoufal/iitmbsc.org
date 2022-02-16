import Layout from "components/Layout";
import Container from "components/Container";
import ContainerHeader from "components/ContainerHeader";

const OpportunitiesPage = () => {
  const execOpenings = [
    {
      title: "Regional Coordinator",
      desc: "Take the responsibility of arranging meets and events in your area"
    },
    {
      title: "Regional Coordinator",
      desc: "Take the responsibility of arranging meets and events in your area"
    },
    {
      title: "Regional Coordinator",
      desc: "Take the responsibility of arranging meets and events in your area"
    },
    {
      title: "Regional Coordinator",
      desc: "Take the responsibility of arranging meets and events in your area"
    },
    {
      title: "Regional Coordinator",
      desc: "Take the responsibility of arranging meets and events in your area"
    }
  ];
  const clubs = [
    {
      name: "Coding Club",
      imgUrl: "https://149362210.v2.pressablecdn.com/wp-content/uploads/2018/04/img-placeholder-rectangle.jpg",
      desc: "Lorem ipsum dolor sit amet, consectuter adipiscing elit. Vestibulum scelerisque velit neque, ed feugiat enim faucibus ut. Preasant et libero nec lectus cursus volutpat. Integer non tintendent sapien. Vivamos non laccos vamos velit. Sabes ke jaje pulrathon me rando te. Morbi Vulputate quam non arcum dignisat tempus. Thures seli monithoso ye metel. Hasto me sobre pasar hasome sepelligro. Hasto provo gartos gretos. Morbi consequat rutrum massa a tristique fringillia at. Nam pretiumconvallis condimentum. Etium cursus atrum consectur vestibulum dictum. Nam at libero vamos, porta blandi dista. Hast limba yen sur. Set tincindunt pharetra."
    },
    {
      name: "MuFix",
      imgUrl: "https://149362210.v2.pressablecdn.com/wp-content/uploads/2018/04/img-placeholder-rectangle.jpg",
      desc: "Lorem ipsum dolor sit amet, consectuter adipiscing elit. Vestibulum scelerisque velit neque, ed feugiat enim faucibus ut. Preasant et libero nec lectus cursus volutpat. Integer non tintendent sapien. Vivamos non laccos vamos velit. Sabes ke jaje pulrathon me rando te. Morbi Vulputate quam non arcum dignisat tempus. Thures seli monithoso ye metel. Hasto me sobre pasar hasome sepelligro. Hasto provo gartos gretos. Morbi consequat rutrum massa a tristique fringillia at. Nam pretiumconvallis condimentum. Etium cursus atrum consectur vestibulum dictum. Nam at libero vamos, porta blandi dista. Hast limba yen sur. Set tincindunt pharetra."
    },
    {
      name: "Wanderbee",
      imgUrl: "https://149362210.v2.pressablecdn.com/wp-content/uploads/2018/04/img-placeholder-rectangle.jpg",
      desc: "Lorem ipsum dolor sit amet, consectuter adipiscing elit. Vestibulum scelerisque velit neque, ed feugiat enim faucibus ut. Preasant et libero nec lectus cursus volutpat. Integer non tintendent sapien. Vivamos non laccos vamos velit. Sabes ke jaje pulrathon me rando te. Morbi Vulputate quam non arcum dignisat tempus. Thures seli monithoso ye metel. Hasto me sobre pasar hasome sepelligro. Hasto provo gartos gretos. Morbi consequat rutrum massa a tristique fringillia at. Nam pretiumconvallis condimentum. Etium cursus atrum consectur vestibulum dictum. Nam at libero vamos, porta blandi dista. Hast limba yen sur. Set tincindunt pharetra."
    },
    {
      name: "Heighers eSports",
      imgUrl: "https://149362210.v2.pressablecdn.com/wp-content/uploads/2018/04/img-placeholder-rectangle.jpg",
      desc: "Lorem ipsum dolor sit amet, consectuter adipiscing elit. Vestibulum scelerisque velit neque, ed feugiat enim faucibus ut. Preasant et libero nec lectus cursus volutpat. Integer non tintendent sapien. Vivamos non laccos vamos velit. Sabes ke jaje pulrathon me rando te. Morbi Vulputate quam non arcum dignisat tempus. Thures seli monithoso ye metel. Hasto me sobre pasar hasome sepelligro. Hasto provo gartos gretos. Morbi consequat rutrum massa a tristique fringillia at. Nam pretiumconvallis condimentum. Etium cursus atrum consectur vestibulum dictum. Nam at libero vamos, porta blandi dista. Hast limba yen sur. Set tincindunt pharetra."
    },
    {
      name: "Cosmos",
      imgUrl: "https://149362210.v2.pressablecdn.com/wp-content/uploads/2018/04/img-placeholder-rectangle.jpg",
      desc: "Lorem ipsum dolor sit amet, consectuter adipiscing elit. Vestibulum scelerisque velit neque, ed feugiat enim faucibus ut. Preasant et libero nec lectus cursus volutpat. Integer non tintendent sapien. Vivamos non laccos vamos velit. Sabes ke jaje pulrathon me rando te. Morbi Vulputate quam non arcum dignisat tempus. Thures seli monithoso ye metel. Hasto me sobre pasar hasome sepelligro. Hasto provo gartos gretos. Morbi consequat rutrum massa a tristique fringillia at. Nam pretiumconvallis condimentum. Etium cursus atrum consectur vestibulum dictum. Nam at libero vamos, porta blandi dista. Hast limba yen sur. Set tincindunt pharetra."
    }
  ]
  return (
    <Layout>
      <Container bgColor={"bg-color-maroon"}>
        {/* <div className="text-center">
          <h1 className="text-color-gold font-righteus text-uppercase fw-bold">Executive Office</h1>
        </div>
      </Container>
      <Container bgColor="bg-color-primary">
        <ContainerHeader>
          <h2 className="m-0">From the President</h2>
        </ContainerHeader>
        <p className="font-roboto my-2">
          Lorem ipsum dolor sit amet, consectuter adipiscing elit. Vestibulum scelerisque velit neque, ed feugiat enim faucibus ut. Preasant et libero nec lectus cursus volutpat. Integer non tintendent sapien. Vivamos non laccos vamos velit. Sabes ke jaje pulrathon me rando te. Morbi Vulputate quam non arcum dignisat tempus. Thures seli monithoso ye metel. Hasto me sobre pasar hasome sepelligro. Hasto provo gartos gretos. Morbi consequat rutrum massa a tristique fringillia at. Nam pretiumconvallis condimentum. Etium cursus atrum consectur vestibulum dictum. Nam at libero vamos, porta blandi dista. Hast limba yen sur. Set tincindunt pharetra.
        </p>
        <p className="font-roboto">
        Lorem ipsum dolor sit amet, consectuter adipiscing elit. Vestibulum scelerisque velit neque, ed feugiat enim faucibus ut. Preasant et libero nec lectus cursus volutpat. Integer non tintendent sapien. Vivamos non laccos vamos velit. Sabes ke jaje pulrathon me rando te. Morbi Vulputate quam non arcum dignisat tempus.
        </p> */}
        <h1 className="text-center font-righteous text-color-gold text-uppercase m-0">Executive Office Openings</h1>
      </Container>
      <Container bgColor={"bg-color-maroon"}>
        <div className="overflow-auto">
          <div className="d-inline-flex justify-content-center flex-lg-wrap">
            {execOpenings.map((role) => {
              return (
                <div className="card border-0 shadow-lg rounded m-1 w-25" key={execOpenings.indexOf(role)}>
                  <div className="card-body bg-color-maroon">
                    <h5 className="card-title">{role.title}</h5>
                    <p className="card-text">{role.desc}</p>
                    <div className="btn bg-color-gold"><a href="https://forms.gle" style={{textDecoration: "none", color: "white"}}>Apply now</a></div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </Container>
      <Container bgColor={"bg-color-primary"}>
        <ContainerHeader>
          <h2>Join Clubs</h2>
        </ContainerHeader>
        <div className="d-flex flex-wrap justify-content-center">
          {clubs.map((club) => {
            return (
              <div className="card border-0 rounded m-2 bg-color-maroon" style={{width: "45%"}} key={clubs.indexOf(club)}>
                <h5 className="card-header text-color-gold font-righteous">{club.name}</h5>
                <img src={club.imgUrl} alt={club.name} width="100%" className="card-img-top" />
                <div className="card-body">
                  <p className="card-text">{club.desc}</p>
                  <div className="btn bg-color-gold"><a href="https://forms.gle" style={{textDecoration: "none", color: "white"}}>Join now</a></div>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </Layout>
  )
}

export default OpportunitiesPage;