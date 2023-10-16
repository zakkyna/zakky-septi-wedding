import React from 'react';
import { Col, Container, Row, Card, Button } from 'react-bootstrap';
import Image from 'next/image'

interface EventProps {
  eventTime: any;
  isMobile: boolean;
  place: string;
  session: string;
}

const EventSection = (props: EventProps) => {
  const valSession = parseInt(props.session);

  const cardEvent = (place: any) => {
    return (
      <>
        {/* <Col md={6}>
            <Card
              className="event-card my-3"
              data-aos="fade-right"
              data-aos-duration="1000">
              <Card.Body data-aos="fade" data-aos-duration="2000">
                <img

alt=""

                  src="/img/ico-wedding-ring.png"
                  className="ico-ring mb-4"
                />
                <Card.Title className="title mt-2 mb-4">Akad Nikah</Card.Title>
                <Card.Text className="text mb-3">
                Masjid Jami' Baitul Mu'min, Wanarejan Selatan, Taman Pemalang
                </Card.Text>
                <Card.Text className="text mb-3">
                  {props.eventTime.akad.format('dddd, DD MMMM YYYY')}
                </Card.Text>
                <Card.Text className="text">
                  {props.eventTime.akad.format('HH:mm')} WIB - Selesai
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card
              className="event-card my-3"
              data-aos="fade-left"
              data-aos-duration="1000">
              <Card.Body data-aos="fade" data-aos-duration="2000">
                <img

alt=""
 src="/img/ico-couple.png" className="ico-ring mb-4" />
                <Card.Title className="title mt-2 mb-4">Resepsi</Card.Title>
                <Card.Text className="text mb-3">
                Rumah mempelai putri, Jl kerinci Rt 03 Rw 02 Wanarejan Selatan, Taman Pemalang
                </Card.Text>
                <Card.Text className="text mb-3">
                  {props.eventTime.startResepsi.format('dddd, DD MMMM YYYY')}
                </Card.Text>
                <Card.Text className="text mb-3">
                  {props.eventTime.startResepsi.format('HH:mm')} WIB -{' '}
                  {props.eventTime.endResepsi.format('HH:mm')} WIB
                </Card.Text>
              </Card.Body>
            </Card>
          </Col> */}
        <Col md={8}>
          <Card
            className="event-card my-3"
            data-aos="fade-up"
            data-aos-duration="1000">
            <Card.Body data-aos="fade" data-aos-duration="2000">
              <img

                alt=""

                src="/img/ico-wedding-ring.png"
                className="ico-ring mb-4"
              />
              <Card.Title className="title mt-2 mb-4">Akad Nikah</Card.Title>
              <Card.Text className="text mb-3">
                Masjid Jami' Baitul Mu'min, Wanarejan Selatan, Taman Pemalang
              </Card.Text>
              <Card.Text className="text mb-3">
                {props.eventTime.akad.format('dddd, DD MMMM YYYY')}
              </Card.Text>
              <Card.Text className="text">
                {props.eventTime.akad.format('HH:mm')} WIB - Selesai
              </Card.Text>

            </Card.Body>
          </Card>
        </Col>
        <Col md={8}>
          <Card
            className="event-card my-3"
            data-aos="fade-up"
            data-aos-duration="1000">
            <Card.Body data-aos="fade" data-aos-duration="2000">
              <img

                alt=""
                src="/img/ico-couple.png" className="ico-ring mb-4" />
              <Card.Title className="title mt-2 mb-4">Resepsi</Card.Title>
              <Card.Text className="text mb-3">
                Rumah mempelai putri, Jl kerinci Rt 03 Rw 02 Wanarejan Selatan, Taman Pemalang
              </Card.Text>
              <Card.Text className="text mb-3">
                {props.eventTime.startResepsi.format('dddd, DD MMMM YYYY')}
              </Card.Text>
              <Card.Text className="text mb-3">
                {props.eventTime.startResepsi.format('HH:mm')} WIB - Selesai

              </Card.Text>
              <div className="d-flex justify-content-center">
                <a href={props.eventTime.location} target="_blank">
                  <Button
                    variant="light"
                    size="sm"
                    className="btn-open-invit">
                    View Map
                  </Button>
                </a>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </>
    );

  };

  return (
    <section className="event-section py-5" style={{ overflow: 'hidden' }}>

      <Row className="justify-content-center">
        <Col md={8}>
          <Card
            className="event-card my-3"
            data-aos="fade-up"
            data-aos-duration="1000">
            <Card.Body data-aos="fade" data-aos-duration="2000">
              <div data-aos="fade-up" data-aos-duration="1000" className="invite-words mb-4">
                <h3 className="head-title text-center">
                  السَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ
                </h3>
                <h3 className="head-title text-center">
                  Assalamu’alaikum Warahmatullahi Wabarakatuh
                </h3>
                {!props.isMobile ? (
                  <p className="head-text text-center mb-4">
                    Dengan memohon Rahmat Allah Subhanahu wa Ta’ala dan dengan
                    segenap kerendahan hati,
                    <br />
                    perkenankanlah kami mengundang Bapak/Ibu/Saudara/i untuk hadir
                    di acara pernikahan kami
                    <br />
                    yang akan dilaksanakan pada:
                  </p>
                ) : (
                  <p className="head-text text-center mb-4">
                    Dengan memohon Rahmat Allah Subhanahu wa Ta’ala dan dengan
                    segenap kerendahan hati, perkenankanlah kami mengundang
                    Bapak/Ibu/Saudara/i untuk hadir di acara pernikahan kami yang
                    akan dilaksanakan pada:
                  </p>
                )}
              </div>
            </Card.Body>
          </Card>
        </Col>
        {cardEvent(props.place)}
      </Row>
    </section>
  );
};

export default EventSection;
