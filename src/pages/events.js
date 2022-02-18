import { useState } from "react";
import Container from "components/Container";
import Layout from "components/Layout";
import {Modal} from "react-bootstrap";
import {events} from "constant/data"

const EventPage = () => {
  window.scrollTo({top: 0});
  const [modal, showModal] = useState(false);
  const closeModal = () => showModal(false)
  const openModal = (eventName, eventDesc) => {
    showModal(true);
    setTimeout(() => {
      document.querySelector(".event-name").innerText = eventName;
      document.querySelector(".event-desc").innerText = eventDesc;
    }, 100);
  }
  return (
    <Layout>
      <Container bgColor={"bg-color-maroon"}>
        <h1 className="font-righteous text-center text-color-gold text-uppercase">Events</h1>
      </Container>
      <Container bgColor="bg-color-primary">
        <div className="d-flex flex-wrap justify-content-center">
          {events.map((event) => {
            return (
              <div key={"event"+events.indexOf(event)} className="card m-2 bg-color-maroon border-0" onClick={()=>openModal(event.name, event.desc)} style={{width:"200px", cursor: "pointer"}}>
                <img src={event.imgURL} alt={event.name} className="card-img-top" style={{width: "200px", height: "200px"}} />
                <div className="card-body">
                  <h5 className="card-title font-righteous text-color-gold">{event.name}</h5>
                  <p className="card-text m-0 space-around-wrap">{event.date}</p>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
      {/* <div className="modal fade" id="eventModal" tabIndex="-1" aria-labelledBy="eventName" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="eventName">Hello World</h5>
            </div>
            <div className="modal-body">
              <p id="eventDesc">How are you?</p>
            </div>
          </div>
        </div>
      </div> */}
      <Modal show={modal} onHide={closeModal} centered>
        <Modal.Header closeButton>
          <Modal.Title className="event-name"></Modal.Title>
        </Modal.Header>
        <Modal.Body className="event-desc"></Modal.Body>
      </Modal>
    </Layout>
  );
}

export default EventPage;