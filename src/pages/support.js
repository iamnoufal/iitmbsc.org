import Layout from "components/Layout";
import Container from "components/Container";
import ContainerHeader from "components/ContainerHeader";

const SupportPage = () => {
  window.scrollTo({top: 0});
  return (
    <Layout>
      <Container bgColor={"bg-color-maroon"}>
        <h1 className="text-center text-color-gold font-righteous text-uppercase">We're here for you</h1>
      </Container>
      <Container bgColor={"bg-color-primary"}>
        <ContainerHeader>
          <h2>Grievance Cell</h2>
        </ContainerHeader>
        <p className="font-roboto my-2">
          Lorem ipsum dolor sit amet, consectuter adipiscing elit. Vestibulum scelerisque velit neque, ed feugiat enim faucibus ut. Preasant et libero nec lectus cursus volutpat. Integer non tintendent sapien. Vivamos non laccos vamos velit. Sabes ke jaje pulrathon me rando te. Morbi Vulputate quam non arcum dignisat tempus. Thures seli monithoso ye metel. Hasto me sobre pasar hasome sepelligro. Hasto provo gartos gretos. Morbi consequat rutrum massa a tristique fringillia at. Nam pretiumconvallis condimentum. Etium cursus atrum consectur vestibulum dictum. Nam at libero vamos, porta blandi dista. Hast limba yen sur. Set tincindunt pharetra.
        </p>
        <p className="font-roboto">
          Lorem ipsum dolor sit amet, consectuter adipiscing elit. Vestibulum scelerisque velit neque, ed feugiat enim faucibus ut. Preasant et libero nec lectus cursus volutpat. Integer non tintendent sapien. Vivamos non laccos vamos velit. Sabes ke jaje pulrathon me rando te. Morbi Vulputate quam non arcum dignisat tempus.
        </p>
        <p className="font-roboto my-2">
          Lorem ipsum dolor sit amet, consectuter adipiscing elit. Vestibulum scelerisque velit neque, ed feugiat enim faucibus ut. Preasant et libero nec lectus cursus volutpat. Integer non tintendent sapien. Vivamos non laccos vamos velit. Sabes ke jaje pulrathon me rando te. Morbi Vulputate quam non arcum dignisat tempus. Thures seli monithoso ye metel. Hasto me sobre pasar hasome sepelligro. Hasto provo gartos gretos. Morbi consequat rutrum massa a tristique fringillia at. Nam pretiumconvallis condimentum. Etium cursus atrum consectur vestibulum dictum. Nam at libero vamos, porta blandi dista. Hast limba yen sur. Set tincindunt pharetra.
        </p>
      </Container>
      <Container bgColor={"bg-color-maroon"}>
        <ContainerHeader>
          <h2>Contact Us</h2>
        </ContainerHeader>
        <h6 className="fs-5 fw-bold">Onlinedegree support:</h6><p className="fs-6"><a href="mailto:support@onlinedegree.iitm.ac.in" target={"_blank"} rel="noreferrer" style={{color: "inherit"}}>support@onlinedegree.iitm.ac.in</a></p>
        <h6 className="fs-5 fw-bold">Grievance Cell:</h6><p className="fs-6"><a href="mailto:student-grievance@onlinedegree.iitm.ac.in" target={"_blank"} rel="noreferrer" style={{color: "inherit"}}>student-grievance@onlinedegree.iitm.ac.in</a></p>
        <h6 className="fs-5 fw-bold">Student Affairs:</h6><p className="fs-6"><a href="mailto:student-affairs@onlinedegree.iitm.ac.in" target={"_blank"} rel="noreferrer" style={{color: "inherit"}}>student-affairs@onlinedegree.iitm.ac.in</a></p>
        <h6 className="fs-5 fw-bold">Executive Council:</h6><p className="fs-6"><a href="mailto:executivecouncil@onlinedegree.iitm.ac.in" target={"_blank"} rel="noreferrer" style={{color: "inherit"}}>executivecouncil@onlinedegree.iitm.ac.in</a></p>
        <h6 className="fs-5 fw-bold">President:</h6><p className="fs-6"><a href="mailto:president@student.onlinedegree.iitm.ac.in" target={"_blank"} rel="noreferrer" style={{color: "inherit"}}>president@student.onlinedegree.iitm.ac.in</a></p>
        <h6 className="fs-5 fw-bold">Student Activities Coordinator:</h6><p className="fs-6"><a href="mailto:sac@student.onlinedegree.iitm.ac.in" target={"_blank"} rel="noreferrer" style={{color: "inherit"}}>sac@student.onlinedegree.iitm.ac.in</a></p>
        <h6 className="fs-5 fw-bold">Academic Affairs Coordinator:</h6><p className="fs-6"><a href="mailto:aac@student.onlinedegree.iitm.ac.in" target={"_blank"} rel="noreferrer" style={{color: "inherit"}}>aac@student.onlinedegree.iitm.ac.in</a></p>
        <h6 className="fs-5 fw-bold">Placement Coordinator:</h6><p className="fs-6"><a href="mailto:placo@student.onlinedegree.iitm.ac.in" target={"_blank"} rel="noreferrer" style={{color: "inherit"}}>placo@student.onlinedegree.iitm.ac.in</a></p>
      </Container>
    </Layout>
  )
}

export default SupportPage;
