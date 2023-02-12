import React from 'react';
import './SliderSection.css'
import img1 from '../../../Images/clients/clients-01.png'
import img2 from '../../../Images/clients/clients-02.png'
import img3 from '../../../Images/clients/clients-03.png'
import img4 from '../../../Images/clients/clients-04.png'
import img5 from '../../../Images/clients/clients-05.png'
import img6 from '../../../Images/clients/clients-06.png'
import img7 from '../../../Images/clients/clients-07.png'
import img8 from '../../../Images/clients/clients-08.png'

const SliderSection = () => {
    const sliderImg = [{img:img1}, {img:img2}, {img:img3}, {img:img4}, {img:img5}, {img:img6}, {img:img7}, {img:img8}];

    const delay = 2500;

        const [index, setIndex] = React.useState(0);
        const timeoutRef = React.useRef(null);

        function resetTimeout() {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        }

        React.useEffect(() => {
            resetTimeout();
            timeoutRef.current = setTimeout(
                () =>
                    setIndex((prevIndex) =>
                        prevIndex === sliderImg.length - 1 ? 0 : prevIndex + 1
                    ),
                delay
            );

            return () => {
                resetTimeout();
            };
        }, [index]);


    return (
        <div className='pt-12'>
            <div className="slideshow ">
                <div
                    className="slideshowSlider "
                    style={{ transform: `translate3d(${-index * 9}%, 0, 0)` }}
                >
                    {sliderImg.map((sliderImgs, index) => (
                        <img src={sliderImgs?.img}
                            className="slide"
                            key={index}
                            style={{ sliderImgs }}
                            alt=''
                        >
                        </img>
                    ))}
                </div>

                <div className="slideshowDots">
                    {sliderImg.map((_, idx) => (
                        <div
                            key={idx}
                            className={`slideshowDot${index === idx ? " active" : ""}`}
                            onClick={() => {
                                setIndex(idx);
                            }}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SliderSection;