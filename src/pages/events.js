import { useState } from "react";
import Container from "components/Container";
import Layout from "components/Layout";
import {Modal} from "react-bootstrap";

const EventPage = () => {
  const [modal, showModal] = useState(false);
  const closeModal = () => showModal(false)
  const openModal = (eventName, eventDesc) => {
    showModal(true);
    setTimeout(() => {
      document.querySelector(".event-name").innerText = eventName;
      document.querySelector(".event-desc").innerText = eventDesc;
    }, 100);
  }
  const events = [
    {
      "name": "Event 1",
      "desc": "Lorem ipsum dolor sit amet, consectuter adipiscing elit. Vestibulum scelerisque velit neque, ed feugiat enim faucibus ut. Preasant et libero nec lectus cursus volutpat. Integer non tintendent sapien. Vivamos non laccos vamos velit. Sabes ke jaje pulrathon me rando te. Morbi Vulputate quam non arcum dignisat tempus. Thures seli monithoso ye metel. Hasto me sobre pasar hasome sepelligro. Hasto provo gartos gretos. Morbi consequat rutrum massa a tristique fringillia at. Nam pretiumconvallis condimentum. Etium cursus atrum consectur vestibulum dictum. Nam at libero vamos, porta blandi dista. Hast limba yen sur. Set tincindunt pharetra.",
      "date": "01 Jan 2022",
      "imgURL": "https://149362210.v2.pressablecdn.com/wp-content/uploads/2018/04/img-placeholder-rectangle.jpg"
    },
    {
      "name": "Event 2",
      "desc": "Lorem ipsum dolor sit amet, consectuter adipiscing elit. Vestibulum scelerisque velit neque, ed feugiat enim faucibus ut. Preasant et libero nec lectus cursus volutpat. Integer non tintendent sapien. Vivamos non laccos vamos velit. Sabes ke jaje pulrathon me rando te. Morbi Vulputate quam non arcum dignisat tempus. Thures seli monithoso ye metel. Hasto me sobre pasar hasome sepelligro. Hasto provo gartos gretos. Morbi consequat rutrum massa a tristique fringillia at. Nam pretiumconvallis condimentum. Etium cursus atrum consectur vestibulum dictum. Nam at libero vamos, porta blandi dista. Hast limba yen sur. Set tincindunt pharetra.",
      "date": "01 Jan 2022",
      "imgURL": "https://149362210.v2.pressablecdn.com/wp-content/uploads/2018/04/img-placeholder-rectangle.jpg"
    },
    {
      "name": "Event 3",
      "desc": "Lorem ipsum dolor sit amet, consectuter adipiscing elit. Vestibulum scelerisque velit neque, ed feugiat enim faucibus ut. Preasant et libero nec lectus cursus volutpat. Integer non tintendent sapien. Vivamos non laccos vamos velit. Sabes ke jaje pulrathon me rando te. Morbi Vulputate quam non arcum dignisat tempus. Thures seli monithoso ye metel. Hasto me sobre pasar hasome sepelligro. Hasto provo gartos gretos. Morbi consequat rutrum massa a tristique fringillia at. Nam pretiumconvallis condimentum. Etium cursus atrum consectur vestibulum dictum. Nam at libero vamos, porta blandi dista. Hast limba yen sur. Set tincindunt pharetra.",
      "date": "01 Jan 2022",
      "imgURL": "https://149362210.v2.pressablecdn.com/wp-content/uploads/2018/04/img-placeholder-rectangle.jpg"
    },
    {
      "name": "Event 3",
      "desc": "Lorem ipsum dolor sit amet, consectuter adipiscing elit. Vestibulum scelerisque velit neque, ed feugiat enim faucibus ut. Preasant et libero nec lectus cursus volutpat. Integer non tintendent sapien. Vivamos non laccos vamos velit. Sabes ke jaje pulrathon me rando te. Morbi Vulputate quam non arcum dignisat tempus. Thures seli monithoso ye metel. Hasto me sobre pasar hasome sepelligro. Hasto provo gartos gretos. Morbi consequat rutrum massa a tristique fringillia at. Nam pretiumconvallis condimentum. Etium cursus atrum consectur vestibulum dictum. Nam at libero vamos, porta blandi dista. Hast limba yen sur. Set tincindunt pharetra.",
      "date": "01 Jan 2022",
      "imgURL": "https://149362210.v2.pressablecdn.com/wp-content/uploads/2018/04/img-placeholder-rectangle.jpg"
    },
    {
      "name": "Event 3",
      "desc": "Lorem ipsum dolor sit amet, consectuter adipiscing elit. Vestibulum scelerisque velit neque, ed feugiat enim faucibus ut. Preasant et libero nec lectus cursus volutpat. Integer non tintendent sapien. Vivamos non laccos vamos velit. Sabes ke jaje pulrathon me rando te. Morbi Vulputate quam non arcum dignisat tempus. Thures seli monithoso ye metel. Hasto me sobre pasar hasome sepelligro. Hasto provo gartos gretos. Morbi consequat rutrum massa a tristique fringillia at. Nam pretiumconvallis condimentum. Etium cursus atrum consectur vestibulum dictum. Nam at libero vamos, porta blandi dista. Hast limba yen sur. Set tincindunt pharetra.",
      "date": "01 Jan 2022",
      "imgURL": "https://149362210.v2.pressablecdn.com/wp-content/uploads/2018/04/img-placeholder-rectangle.jpg"
    },
    {
      "name": "Event 3",
      "desc": "Lorem ipsum dolor sit amet, consectuter adipiscing elit. Vestibulum scelerisque velit neque, ed feugiat enim faucibus ut. Preasant et libero nec lectus cursus volutpat. Integer non tintendent sapien. Vivamos non laccos vamos velit. Sabes ke jaje pulrathon me rando te. Morbi Vulputate quam non arcum dignisat tempus. Thures seli monithoso ye metel. Hasto me sobre pasar hasome sepelligro. Hasto provo gartos gretos. Morbi consequat rutrum massa a tristique fringillia at. Nam pretiumconvallis condimentum. Etium cursus atrum consectur vestibulum dictum. Nam at libero vamos, porta blandi dista. Hast limba yen sur. Set tincindunt pharetra.",
      "date": "01 Jan 2022",
      "imgURL": "https://149362210.v2.pressablecdn.com/wp-content/uploads/2018/04/img-placeholder-rectangle.jpg"
    },
    {
      "name": "Event 3",
      "desc": "Lorem ipsum dolor sit amet, consectuter adipiscing elit. Vestibulum scelerisque velit neque, ed feugiat enim faucibus ut. Preasant et libero nec lectus cursus volutpat. Integer non tintendent sapien. Vivamos non laccos vamos velit. Sabes ke jaje pulrathon me rando te. Morbi Vulputate quam non arcum dignisat tempus. Thures seli monithoso ye metel. Hasto me sobre pasar hasome sepelligro. Hasto provo gartos gretos. Morbi consequat rutrum massa a tristique fringillia at. Nam pretiumconvallis condimentum. Etium cursus atrum consectur vestibulum dictum. Nam at libero vamos, porta blandi dista. Hast limba yen sur. Set tincindunt pharetra.",
      "date": "01 Jan 2022",
      "imgURL": "https://149362210.v2.pressablecdn.com/wp-content/uploads/2018/04/img-placeholder-rectangle.jpg"
    },
    {
      "name": "Event 3",
      "desc": "Lorem ipsum dolor sit amet, consectuter adipiscing elit. Vestibulum scelerisque velit neque, ed feugiat enim faucibus ut. Preasant et libero nec lectus cursus volutpat. Integer non tintendent sapien. Vivamos non laccos vamos velit. Sabes ke jaje pulrathon me rando te. Morbi Vulputate quam non arcum dignisat tempus. Thures seli monithoso ye metel. Hasto me sobre pasar hasome sepelligro. Hasto provo gartos gretos. Morbi consequat rutrum massa a tristique fringillia at. Nam pretiumconvallis condimentum. Etium cursus atrum consectur vestibulum dictum. Nam at libero vamos, porta blandi dista. Hast limba yen sur. Set tincindunt pharetra.",
      "date": "01 Jan 2022",
      "imgURL": "https://149362210.v2.pressablecdn.com/wp-content/uploads/2018/04/img-placeholder-rectangle.jpg"
    },
    {
      "name": "Event 3",
      "desc": "Lorem ipsum dolor sit amet, consectuter adipiscing elit. Vestibulum scelerisque velit neque, ed feugiat enim faucibus ut. Preasant et libero nec lectus cursus volutpat. Integer non tintendent sapien. Vivamos non laccos vamos velit. Sabes ke jaje pulrathon me rando te. Morbi Vulputate quam non arcum dignisat tempus. Thures seli monithoso ye metel. Hasto me sobre pasar hasome sepelligro. Hasto provo gartos gretos. Morbi consequat rutrum massa a tristique fringillia at. Nam pretiumconvallis condimentum. Etium cursus atrum consectur vestibulum dictum. Nam at libero vamos, porta blandi dista. Hast limba yen sur. Set tincindunt pharetra.",
      "date": "01 Jan 2022",
      "imgURL": "https://149362210.v2.pressablecdn.com/wp-content/uploads/2018/04/img-placeholder-rectangle.jpg"
    },
    {
      "name": "Event 3",
      "desc": "Lorem ipsum dolor sit amet, consectuter adipiscing elit. Vestibulum scelerisque velit neque, ed feugiat enim faucibus ut. Preasant et libero nec lectus cursus volutpat. Integer non tintendent sapien. Vivamos non laccos vamos velit. Sabes ke jaje pulrathon me rando te. Morbi Vulputate quam non arcum dignisat tempus. Thures seli monithoso ye metel. Hasto me sobre pasar hasome sepelligro. Hasto provo gartos gretos. Morbi consequat rutrum massa a tristique fringillia at. Nam pretiumconvallis condimentum. Etium cursus atrum consectur vestibulum dictum. Nam at libero vamos, porta blandi dista. Hast limba yen sur. Set tincindunt pharetra.",
      "date": "01 Jan 2022",
      "imgURL": "https://149362210.v2.pressablecdn.com/wp-content/uploads/2018/04/img-placeholder-rectangle.jpg"
    },
    {
      "name": "Event 3",
      "desc": "Lorem ipsum dolor sit amet, consectuter adipiscing elit. Vestibulum scelerisque velit neque, ed feugiat enim faucibus ut. Preasant et libero nec lectus cursus volutpat. Integer non tintendent sapien. Vivamos non laccos vamos velit. Sabes ke jaje pulrathon me rando te. Morbi Vulputate quam non arcum dignisat tempus. Thures seli monithoso ye metel. Hasto me sobre pasar hasome sepelligro. Hasto provo gartos gretos. Morbi consequat rutrum massa a tristique fringillia at. Nam pretiumconvallis condimentum. Etium cursus atrum consectur vestibulum dictum. Nam at libero vamos, porta blandi dista. Hast limba yen sur. Set tincindunt pharetra.",
      "date": "01 Jan 2022",
      "imgURL": "https://149362210.v2.pressablecdn.com/wp-content/uploads/2018/04/img-placeholder-rectangle.jpg"
    },
    {
      "name": "Event 3",
      "desc": "Lorem ipsum dolor sit amet, consectuter adipiscing elit. Vestibulum scelerisque velit neque, ed feugiat enim faucibus ut. Preasant et libero nec lectus cursus volutpat. Integer non tintendent sapien. Vivamos non laccos vamos velit. Sabes ke jaje pulrathon me rando te. Morbi Vulputate quam non arcum dignisat tempus. Thures seli monithoso ye metel. Hasto me sobre pasar hasome sepelligro. Hasto provo gartos gretos. Morbi consequat rutrum massa a tristique fringillia at. Nam pretiumconvallis condimentum. Etium cursus atrum consectur vestibulum dictum. Nam at libero vamos, porta blandi dista. Hast limba yen sur. Set tincindunt pharetra.",
      "date": "01 Jan 2022",
      "imgURL": "https://149362210.v2.pressablecdn.com/wp-content/uploads/2018/04/img-placeholder-rectangle.jpg"
    }
  ];
  return (
    <Layout>
      <Container bgColor={"bg-color-maroon"}>
        <h1 className="font-righteous text-center text-color-gold text-uppercase">Events</h1>
      </Container>
      <Container bgColor="bg-color-primary">
        {/* <div className="overflow-auto my-3"> */}
        {/* <button type="button" onClick={openModal}>Open Modal</button> */}
          <div className="d-flex flex-wrap justify-content-center">
            {events.map((event) => {
              return (
                <div key={event.name} className="card m-2 bg-color-maroon border-0" onClick={()=>openModal(event.name, event.desc)} style={{width:"200px", cursor: "pointer"}}>
                  <img src={event.imgURL} alt={event.name} className="card-img-top" style={{width: "200px", height: "200px"}} />
                  <div className="card-body">
                    <h5 className="card-title font-righteous text-color-gold">{event.name}</h5>
                    <p className="card-text m-0 space-around-wrap">{event.date}</p>
                  </div>
                </div>
              )
            })}
          </div>
        {/* </div> */}
      </Container>
      {/* <div className="modal fade" id="eventModal" tabIndex="-1" aria-labelledBy="eventName" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="eventName">Hello World</h5>
            </div>1
            <div className="modal-body">
              <p id="eventDesc">How are you?</p>
            </div>
          </div>
        </div>
      </div> */}
      <Modal show={modal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title className="event-name"></Modal.Title>
        </Modal.Header>
        <Modal.Body className="event-desc"></Modal.Body>
      </Modal>
    </Layout>
  );
}

export default EventPage;