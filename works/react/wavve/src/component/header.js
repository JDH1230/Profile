import './header.scss';
import { Routes, Route, Link } from 'react-router-dom';
const path = process.env.PUBLIC_URL;
function header() {

    function gnb_show () {
        if(window.innerWidth > 768){
            document.getElementById("menu").style.opacity = "1";
        }
    }
    
    function gnb_none() {
        if(window.innerWidth > 768){
            document.getElementById("menu").style.opacity = "0";
        }
    }    
    return (
        <div className='header'>
            <ul>
                <li><a href='#'>로그인  </a></li>
                <li><a href='#'>이용권</a></li>
                <li><a href='#'>코인,쿠폰</a></li>
                <li><a href='#'>웨이브온</a></li>
                <li><a href='#'>이벤트</a></li>
            </ul>
            <hr />
            <div className="gnb">
                <Link to="/"><img src={`${path}/logo.png`} alt="logo" /></Link>
                <ul className='gnb-detail'>
                    <li><Link to='/'><a href="#">홈</a></Link></li>
                    <li><a href="#" className='category' onMouseEnter={gnb_show} >카테고리</a></li>
                    <li><a href="#">LIVE</a></li>
                    <li><a href="#">MY</a></li>
                </ul>
                <img src={`${path}/search.png`} alt="search"  className='search'/>
                <div className='menu' id='menu' onMouseLeave={gnb_none}>
                    <ul>
                        <li>전체 카테고리</li>
                        <hr />
                        <li className='recommend'>추천 메뉴</li>
                        <li><Link to='/drama'>드라마</Link></li>
                        <li>예능</li>
                        <li>영화</li>
                        <li>영화플러스</li>
                        <li>해외시리즈</li>
                        <li>ORIGINAL</li>
                        <li>CLASSIC</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default header;