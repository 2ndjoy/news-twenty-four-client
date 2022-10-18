import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaGoogle, FaGithub, FaFacebook, FaYoutube, FaTwitter, FaWhatsappSquare, FaDiscord, FaCogs, FaQuestionCircle } from 'react-icons/fa';
import BrandCarousel from '../BrandCarousel/BrandCarousel';

const RightSIdeNav = () => {
    return (
        <div>
            <ButtonGroup vertical>
                <Button className='mb-2' variant="outline-primary"> <FaGoogle></FaGoogle>  Log in Google</Button>
                <Button className='mb-2' variant="outline-dark"><FaGithub></FaGithub>  Log in Github</Button>
            </ButtonGroup>
            <h5>Find us on</h5>
            <div>
                <ListGroup>
                    <ListGroup.Item className='mb-2' > <FaFacebook></FaFacebook>  Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-2' > <FaYoutube></FaYoutube>  YouTube</ListGroup.Item>
                    <ListGroup.Item className='mb-2' > <FaTwitter></FaTwitter>  Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2' > <FaWhatsappSquare></FaWhatsappSquare>  WhatsApp</ListGroup.Item>
                    <ListGroup.Item className='mb-2' > <FaDiscord></FaDiscord>  Discord</ListGroup.Item>
                    <ListGroup.Item className='mb-2' > <FaCogs></FaCogs>  Privacy Policy</ListGroup.Item>
                    <ListGroup.Item className='mb-2' > <FaQuestionCircle></FaQuestionCircle>  Terms & Condition</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <BrandCarousel></BrandCarousel>
            </div>

        </div>
    );
};

export default RightSIdeNav;




