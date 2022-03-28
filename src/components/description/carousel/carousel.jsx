import { Carousel } from 'react-responsive-carousel';
import background from '../carousel/Background.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function CarouselComponent() {
    return (
        <div className="carousel-wrapper">
            <Carousel>
                <div>
                    <img src={background} />
                </div>
                <div>
                    <img src={background} />
                </div>
                <div>
                    <img src={background} />
                </div>
            </Carousel>
        </div>
        
    );
}