import Layout from "components/Layout";
import Container from "components/Container";
import ContainerHeader from "components/ContainerHeader";
import NameList from "components/NameList";

const GovernancePage = () => {
  const exec = [
    {
      "name": "Hariharan Balasubramanian",
      "role": "President",
      "imgURL": "https://149362210.v2.pressablecdn.com/wp-content/uploads/2018/04/img-placeholder-rectangle.jpg"
    },
    {
      "name": "Jigyasha Agarwal",
      "role": "Student Activities Coordinator",
      "imgURL": "https://149362210.v2.pressablecdn.com/wp-content/uploads/2018/04/img-placeholder-rectangle.jpg"
    },
    {
      "name": "Abishek Vinod",
      "role": "Academic Affairs Coordinator",
      "imgURL": "https://149362210.v2.pressablecdn.com/wp-content/uploads/2018/04/img-placeholder-rectangle.jpg"
    },
    {
      "name": "Abinandan Sethi",
      "role": "Placement Coordinator",
      "imgURL": "https://149362210.v2.pressablecdn.com/wp-content/uploads/2018/04/img-placeholder-rectangle.jpg"
    }
  ];
  const sec = [
    {
      name: "Madhurima Ghosh",
      house: "Bandipur"
    },
    {
      name: "Gagneet Kaur",
      house: "Corbett"
    },
    {
      name: "Harsh Kumar Upadhyay",
      house: "Gir"
    },
    {
      name: "Aditi Manthiripragada",
      house: "Kanha"
    },
    {
      name: "Rahul Sharma",
      house: "Kaziranga"
    },
    {
      name: "Dheeraj Mukhirala",
      house: "Nallamala"
    },
    {
      name: "Saharsh Samir",
      house: "Namdapha"
    },
    {
      name: "Gokulakrishnan",
      house: "Nilgiri"
    },
    {
      name: "Kirupa Krishnan",
      house: "Pichavaram"
    },
    {
      name: "Pratham Sharma",
      house: "Saranda"
    },
    {
      name: "unknown",
      house: "Sunderbans"
    },
    {
      name: "Tushar Rana",
      house: "Wayanad"
    }
  ]
  const ds = [
    {
      name: "Harshvardan Kadwe",
      house: "Bandipur"
    },
    {
      name: "Aarthi",
      house: "Corbett"
    },
    {
      name: "Myisha Singh",
      house: "Gir"
    },
    {
      name: "Vineet Donthi",
      house: "Kanha"
    },
    {
      name: "Shraddha Kajle",
      house: "Kaziranga"
    },
    {
      name: "Shalini Singh",
      house: "Nallamala"
    },
    {
      name: "Nathania Fernandes",
      house: "Namdapha"
    },
    {
      name: "Gokulakrishnan",
      house: "Nilgiri"
    },
    {
      name: "Chikirsha Gulati",
      house: "Pichavaram"
    },
    {
      name: "Anurag Mondal",
      house: "Saranda"
    },
    {
      name: "unknown",
      house: "Sunderbans"
    },
    {
      name: "Satabarna Tapadar",
      house: "Wayanad"
    }
  ]
  const wa = [
    {
      name: "Ashwin Hebbar",
      house: "Bandipur"
    },
    {
      name: "Unknown",
      house: "Corbett"
    },
    {
      name: "Athul Srinivas",
      house: "Gir"
    },
    {
      name: "Jagannidhi Namasivayam",
      house: "Kanha"
    },
    {
      name: "Kandhapu Snehith",
      house: "Kaziranga"
    },
    {
      name: "Swapnadeep Pradhan",
      house: "Nallamala"
    },
    {
      name: "Yawar Mushtaq",
      house: "Namdapha"
    },
    {
      name: "Unknown",
      house: "Nilgiri"
    },
    {
      name: "Gurneet Bhuller",
      house: "Pichavaram"
    },
    {
      name: "Vigneshvaran",
      house: "Saranda"
    },
    {
      name: "unknown",
      house: "Sunderbans"
    },
    {
      name: "Archit Srivastava",
      house: "Wayanad"
    }
  ]
  return (
    <Layout>
      <Container bgColor={"bg-color-maroon"}>
        <div className="text-center">
          <h1 className="text-color-gold font-righteus text-uppercase fw-bold">The Executive Council</h1>
        </div>
      </Container>
      <Container bgColor="bg-color-maroon font-righteous">
        {/* <div className="overflow-auto"> */}
          <div className="d-flex flex-wrap flex-md-nowrap">
            {exec.map((member) => {
              return (
                <div key={member.name} className="card mx-2 bg-color-maroon border-0" >
                  <img src={member.imgURL} alt={member.name} className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title text-color-gold">{member.name}</h5>
                    <p className="card-text">{member.role}</p>
                  </div>
                </div>
              )
            })}
          </div>
        {/* </div> */}
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
        <NameList list={sec} />
      </Container>
      <Container bgColor={"bg-color-maroon"}>
        <div className="text-center">
          <h1 className="text-color-gold font-righteus text-uppercase fw-bold">House Deputy Secreteries</h1>
        </div>
      </Container>
      <Container bg-bgColor={"bg-color-primary"}>
        <NameList list={ds} />
      </Container>
      <Container bgColor={"bg-color-maroon"}>
        <div className="text-center">
          <h1 className="text-color-gold font-righteus text-uppercase fw-bold">House Web Admins</h1>
        </div>
      </Container>
      <Container bg-bgColor={"bg-color-primary"}>
        <NameList list={wa} />
      </Container>
    </Layout>
  )
}

export default GovernancePage;