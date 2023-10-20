import { height } from '@fortawesome/free-brands-svg-icons/fa42Group';
import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

interface FrontCoverProps {
  femaleName: string;
  maleName: string;
  guestName: string;
  place: string;
  onClick: () => void;
}

const FrontCover = (props: FrontCoverProps) => {
  return (
    <section
      className="wd-fullbg"
      data-aos="fade-down"
      data-aos-duration="1000">
      <div style={{
        height: '75vh',
      }}>
        <Col md={12} className="d-flex justify-content-center">
          <div
            className="mt-4 p-4"
            data-aos="fade-down"
            data-aos-duration="2000">
            <p className="mb-2 text-center text-white wd-title">
              Undangan Pernikahan
            </p>
            <h4 className="mb-1 text-center text-white wd-couplename font-weight-bold">
              {props.maleName} & {props.femaleName}
            </h4>

            {props.guestName.length !== 0 && (
              <>
                <div style={{
                  height: '15px',
                }}></div>
                <p className="mb-1 text-center wd-for-txt">Kepada</p>
                <Card className='guest-name-card'>
                  <Card.Body >
                    <p className="mb-1 text-center text-black wd-guestname font-weight-bold">
                      {props.guestName}
                    </p>
                  </Card.Body>
                </Card>
              </>
            )}

          </div>
        </Col>
      </div>
      <div style={{
        height: '25vh',
      }}>
        <Col md={12} className="d-flex justify-content-center">
          <Button
            variant="light"
            size="lg"
            className="btn-open-invit"
            onClick={props.onClick}>
            Buka Undangan
          </Button>
        </Col>
      </div>

    </section>
  );
};

export default FrontCover;
