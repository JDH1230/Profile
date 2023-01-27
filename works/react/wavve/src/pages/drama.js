import React from 'react';
import { useSelector } from "react-redux";
import './drama.scss';
const path = process.env.PUBLIC_URL;
function Drama() {
    let state = useSelector((store) =>  {return store});
    return (
        <div>
            <div className='pagetop'>
                <p>드라마</p>
            </div>
            <div>
                <p class='subtitle'>인기 드라마</p>
                <div className="dramadetail1">
                    {
                    (state.DramaMember.examembers).map ((data,idx) => {
                        return (
                            <div key={idx}>
                                <img src={`${path}/${data.drama}`} alt={data.name} />
                            </div>
                        )
                    })
                    }
                    
                </div>

                <p class='subtitle'>#로맨스</p>
                <div className="dramadetail1">
                    {
                    (state.DramaMember.exbmembers).map ((data,idx) => {
                        return (
                            <div key={idx}>
                                <img src={`${path}/${data.drama}`} alt={data.name} />
                            </div>
                        )
                    })
                    }
                    
                </div>

                <p class='subtitle'>#청춘</p>
                <div className="dramadetail1">
                    {
                    (state.DramaMember.excmembers).map ((data,idx) => {
                        return (
                            <div key={idx}>
                                <img src={`${path}/${data.drama}`} alt={data.name} />
                            </div>
                        )
                    })
                    }
                    
                </div>

                <p class='subtitle'>#시트콤 #코미디</p>
                <div className="dramadetail1">
                    {
                    (state.DramaMember.exdmembers).map ((data,idx) => {
                        return (
                            <div key={idx}>
                                <img src={`${path}/${data.drama}`} alt={data.name} />
                            </div>
                        )
                    })
                    }
                    
                </div>
            </div>
        </div>
    );
}

export default Drama;