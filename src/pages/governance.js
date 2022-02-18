import Layout from "components/Layout";
import Container from "components/Container";
import ContainerHeader from "components/ContainerHeader";
import NameList from "components/NameList";
import { exec, sec, ds, wa } from "constant/data"

const GovernancePage = () => {
  window.scrollTo({top: 0});
  return (
    <Layout>
      <Container bgColor={"bg-color-maroon"}>
        <div className="text-center">
          <h1 className="text-color-gold font-righteus text-uppercase fw-bold">The Executive Council</h1>
        </div>
      </Container>
      <Container bgColor="bg-color-maroon font-righteous">
        <div className="d-flex flex-wrap flex-md-nowrap">
          {exec.map((member) => {
            return (
              <div key={"secmember"+exec.indexOf(member)} className="card mx-2 bg-color-maroon border-0" >
                <img src={member.imgURL} alt={member.name} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title text-color-gold">{member.name}</h5>
                  <p className="card-text">{member.role}</p>
                </div>
              </div>
            )
          })}
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
        </p>
      </Container>
      <Container bgColor={"bg-color-maroon"}>
        <div className="text-center">
          <h1 className="text-color-gold font-righteus text-uppercase fw-bold">House Secreteries</h1>
        </div>
      </Container>
      <Container bg-bgColor={"bg-color-primary"}>
        <NameList list={sec} role={"secretary"} />
      </Container>
      <Container bgColor={"bg-color-maroon"}>
        <div className="text-center">
          <h1 className="text-color-gold font-righteus text-uppercase fw-bold">House Deputy Secreteries</h1>
        </div>
      </Container>
      <Container bg-bgColor={"bg-color-primary"}>
        <NameList list={ds} role={"deputy-secretary"} />
      </Container>
      <Container bgColor={"bg-color-maroon"}>
        <div className="text-center">
          <h1 className="text-color-gold font-righteus text-uppercase fw-bold">House Web Admins</h1>
        </div>
      </Container>
      <Container bg-bgColor={"bg-color-primary"}>
        <NameList list={wa} role={"web-admin"} />
      </Container>
    </Layout>
  )
}

export default GovernancePage;