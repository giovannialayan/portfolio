import { Modal } from 'react-bootstrap';
import './ImageCarousel.css';
import { useState } from 'react';

interface Props {
  images: string[];
}

function ImageCarousel({ images }: Props) {
  const [enlargeImage, setEnlargeImage] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const showEnlargedImage = (imageSrc: string) => {
    setEnlargeImage(true);
    setCurrentImage(imageSrc);
  };

  return (
    // <Carousel className='carouselParent border'>
    //   {images.map((image) => {
    //     return (
    //       <Carousel.Item key={image}>
    //         <img className='d-block w-100' src={image}></img>
    //       </Carousel.Item>
    //     );
    //   })}
    // </Carousel>
    <div>
      <div className='carouselParent d-flex flex-row flex-wrap justify-content-center my-4'>
        {images.map((image) => {
          return (
            <a key={image} role='button' className='d-flex my-1' onClick={() => showEnlargedImage(image)}>
              <img className='border m-auto' src={image} />
            </a>
          );
        })}
      </div>

      <Modal dialogClassName='imageModalDialog' show={enlargeImage} onHide={() => setEnlargeImage(false)}>
        <Modal.Body className='p-0'>
          <a role='button' className='d-flex' onClick={() => setEnlargeImage(false)}>
            <img className='w-100' src={currentImage} />
          </a>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ImageCarousel;
