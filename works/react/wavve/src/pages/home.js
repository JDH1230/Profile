import React, { useState } from 'react';
import { useSelector } from "react-redux";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.scss';
const path = process.env.PUBLIC_URL;
function Main() {
    let state = useSelector((store) =>  {return store});
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={`${path}/drama1.jpg`}
                        alt="First slide"
                    />
                    <img src={`${path}/drama1detail.png`} alt="detail" className='detail'/>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={`${path}/drama2.jpg`}
                        alt="Second slide"
                    />

                    <img src={`${path}/drama2detail.png`} alt="detail" className='detail'/>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={`${path}/drama3.jpg`}
                    alt="Third slide"
                    />

                <img src={`${path}/drama3detail.png`} alt="detail" className='detail'/>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={`${path}/drama4.jpg`}
                    alt="Third slide"
                    />

                <img src={`${path}/drama4detail.png`} alt="detail" className='detail'/>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={`${path}/drama5.jpg`}
                    alt="Third slide"
                    />

                <img src={`${path}/drama5detail.png`} alt="detail" className='detail'/>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={`${path}/drama6.jpg`}
                    alt="Third slide"
                    />

                <img src={`${path}/drama6detail.png`} alt="detail" className='detail'/>
                </Carousel.Item>
            </Carousel>
            <p class='subtitle'>????????? ?????? ?????????</p>
            <div className="dramadetail">
                {
                (state.DramaMember.members).map ((data,idx) => {
                    return (
                        <div key={idx}>
                            <img src={`${path}/${data.drama}`} alt={data.name} />
                        </div>
                    )
                })
                }
                
            </div>
            <p class='subtitle'>???????????? ???????????? ?????????</p>
            <div className="dramadetail">
                {
                (state.DramaMember.exmembers).map ((data,idx) => {
                    return (
                        <div key={idx}>
                            <img src={`${path}/${data.drama}`} alt={data.name} />
                        </div>
                    )
                })
                }
                
            </div>
            <p class='subtitle'>?????????????????? ?????? ????????? ????????????</p>
            <div className="dramadetail">
                {
                (state.DramaMember.eximembers).map ((data,idx) => {
                    return (
                        <div key={idx}>
                            <img src={`${path}/${data.drama}`} alt={data.name} />
                        </div>
                    )
                })
                }
                
            </div>
        </div>
    );
}

export default Main;