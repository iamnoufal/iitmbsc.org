import Layout from "components/Layout";
import CarouselElement from "components/carousel/Carousel";
import Container from "components/Container";
import ContainerHeader from "components/ContainerHeader";

const HomePage = () => {
  const carouselList = ["https://149362210.v2.pressablecdn.com/wp-content/uploads/2018/04/img-placeholder-rectangle.jpg", "https://149362210.v2.pressablecdn.com/wp-content/uploads/2018/04/img-placeholder-rectangle.jpg", "https://149362210.v2.pressablecdn.com/wp-content/uploads/2018/04/img-placeholder-rectangle.jpg"];
  const sec = [
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
  const events = [
    {
      "name": "Event 1",
      "desc": "Event Description",
      "date": "01 Jan 2022",
      "imgURL": "https://149362210.v2.pressablecdn.com/wp-content/uploads/2018/04/img-placeholder-rectangle.jpg"
    },
    {
      "name": "Event 2",
      "desc": "Event Description",
      "date": "01 Jan 2022",
      "imgURL": "https://149362210.v2.pressablecdn.com/wp-content/uploads/2018/04/img-placeholder-rectangle.jpg"
    },
    {
      "name": "Event 3",
      "desc": "Event Description",
      "date": "01 Jan 2022",
      "imgURL": "https://149362210.v2.pressablecdn.com/wp-content/uploads/2018/04/img-placeholder-rectangle.jpg"
    }
  ];
  const oppurtunities = [
    {
      "name": "CLUBS",
      "imgURL": "https://149362210.v2.pressablecdn.com/wp-content/uploads/2018/04/img-placeholder-rectangle.jpg"
    },
    {
      "name": "STUDY GROUPS",
      "imgURL": "https://149362210.v2.pressablecdn.com/wp-content/uploads/2018/04/img-placeholder-rectangle.jpg"
    },
    {
      "name": "EXECUTIVE OFFICE",
      "imgURL": "https://149362210.v2.pressablecdn.com/wp-content/uploads/2018/04/img-placeholder-rectangle.jpg"
    }
  ];
  const support = [
    {
      "name": "WELLNESS CENTER",
      "imgURL": "https://149362210.v2.pressablecdn.com/wp-content/uploads/2018/04/img-placeholder-rectangle.jpg"
    },
    {
      "name": "GRIEVENCE CELL",
      "imgURL": "https://149362210.v2.pressablecdn.com/wp-content/uploads/2018/04/img-placeholder-rectangle.jpg"
    },
    {
      "name": "FAQS AND BROCHURES",
      "imgURL": "https://149362210.v2.pressablecdn.com/wp-content/uploads/2018/04/img-placeholder-rectangle.jpg"
    }
  ];
  return (
    <Layout>
      <Container bgColor="bg-color-maroon">
        <CarouselElement list={carouselList} />
      </Container>
      <Container bgColor="bg-color-primary font-righteous">
        <ContainerHeader btnText="GOVERNANCE" to="/governance" btnClass="text-color-gold bg-color-maroon">
          <h5 className="m-0">2021-2022</h5>
          <h2 className="m-0">The Executive Council</h2>
        </ContainerHeader>
        <div className="my-3 overflow-auto">
          <div className="d-inline-flex">
            {sec.map((member) => {
              return (
                <div key={member.name} className="card m-2 bg-color-maroon border-0" >
                  <img src={member.imgURL} alt={member.name} className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title text-color-gold">{member.name}</h5>
                    <p className="card-text">{member.role}</p>
                  </div>
                </div>
              )
            })}
            <div className="my-auto border-0 d-block d-lg-none">
              <div className="bg-color-maroon p-2 mx-3" style={{ "borderRadius": "30vw" }}>
                <i className="bi bi-chevron-compact-right fs-1" />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container bgColor="bg-color-maroon text-white font-righteous">
        <ContainerHeader btnText="EXPLORE" to="/events" btnClass="text-white bg-color-gold">
          <h5 className="m-0">GET UPTO DATE ON</h5>
          <h2 className="m-0 text-color-gold">UPCOMING EVENTS</h2>
        </ContainerHeader>
        <div className="overflow-auto my-3">
          <div className="d-inline-flex">
            {events.map((event) => {
              return (
                <div key={event.name} className="card m-2 bg-color-maroon w-auto border-0">
                  <img src={event.imgURL} alt={event.name} className="card-img-top" />
                  <div className="card-body">
                    <p className="card-text m-0">{event.date}</p>
                    <h5 className="card-title">{event.name}</h5>
                  </div>
                </div>
              )
            })}
            <div className="my-auto border-0 d-block d-lg-none">
              <div className="bg-color-primary p-2 mx-3" style={{ "borderRadius": "30vw" }}>
                <i className="bi bi-chevron-compact-right fs-1" />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container bgColor="bg-color-primary font-righteous">
        <ContainerHeader btnText="VIEW MORE" to="/opportunities" btnClass="text-color-gold bg-color-maroon">
          <h5 className="m-0">DISCOVER NEW</h5>
          <h2 className="m-0">OPPORTUNITIES</h2>
        </ContainerHeader>
        <div className="overflow-auto my-3">
          <div className="d-inline-flex">
            {oppurtunities.map((opportunity) => {
              return (
                <div key={opportunity.name} className="card m-2 w-auto border-0">
                  <img src={opportunity.imgURL} alt={opportunity.name} className="card-img-top" />
                  <div className="card-body py-1">
                    <p className="card-title m-0 text-center">{opportunity.name}</p>
                  </div>
                </div>
              )
            })}
            <div className="my-auto border-0 d-block d-lg-none">
              <div className="bg-color-maroon p-2 mx-3" style={{ "borderRadius": "30vw" }}>
                <i className="bi bi-chevron-compact-right fs-1" />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container bgColor="bg-color-maroon text-white font-righteous">
        <ContainerHeader btnText="SUPPORT" to="/support" btnClass="text-white bg-color-gold">
          <h5 className="m-0">WE ARE HERE TO</h5>
          <h2 className="m-0 text-color-gold">SUPPORT YOU</h2>
        </ContainerHeader>
        <div className="overflow-auto my-3">
          <div className="d-inline-flex">
            {support.map((supp) => {
              return (
                <div key={supp.name} className="card m-2 bg-color-maroon w-auto border-0">
                  <img src={supp.imgURL} alt={supp.name} className="card-img-top" />
                  <div className="card-body py-1">
                    <p className="card-title m-0 text-center">{supp.name}</p>
                  </div>
                </div>
              )
            })}
            <div className="my-auto border-0 d-block d-lg-none">
              <div className="bg-color-primary p-2 mx-3" style={{ "borderRadius": "30vw" }}>
                <i className="bi bi-chevron-compact-right fs-1" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default HomePage;