import './footer.scss';
function footer() {
    return (
        <div className="footer">
            <hr />
            <p>공지사항 [안내] 새로운 다이브, Just Dive!</p>
            <hr />
            <ul>
                <li>회사소개</li>
                <li>인재채용</li>
                <li>서비스 소개</li>
                <li>이용약관</li>
                <li>개인정보 처리방침</li>
                <li>고객센터</li>
            </ul>
            <p className='info'> 콘텐츠웨이브 주식회사 | 대표이사 이태현 | 고객센터 1599-3709 (평일 09:00~18:00 / 점심시간 12:00~13:00 / 주말 및 공휴일 휴무)</p>
            <p className='info'> 사업자등록번호 220-88-38020 | 호스팅서비스제공자 : 마이크로소프트 유한회사, 구글클라우드코리아 유한회사, 아마존웹서비시즈코리아 유한회사</p>
            <p className='info'> 통신판매업 신고번호 : 제 2021-서울영등포-0585호 | 통신판매업 정보 공개 : http://www.ftc.go.kr/bizCommPop.do?wrkr_no=220-88-38020</p>
            <p className='info'> 서울특별시 영등포구 여의나루로 60 포스트타워 19층 | 전자우편주소 : helpdesk@wavve.com</p>
            <p className='copyright'>Copyright© 콘텐츠웨이브(주) All rights reserved.</p>
        </div>
    );
}

export default footer;