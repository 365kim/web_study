import React from 'react';
import {
    MDBView,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBContainer,
    MDBMask
} from
        'mdbreact';

const Cards = () => {
    return (
        <MDBContainer >
            <MDBRow center>
                <MDBCol md='3'>
                    <MDBCard narrow className="card-margin">
                        <MDBView hover>
                            <MDBCardImage
                                className='card-img-top'
                                src='https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
                                alt=""
                            />
                            <MDBMask className="flex-center" overlay='purple-light'>
                                <a href="#" target="_blank" className="card-overlay-text">
                                 자세히 알아보기&nbsp;&nbsp;&nbsp;
                                <MDBIcon icon="chevron-right" className="mr-1" />
                                </a>
                            </MDBMask>
                        </MDBView>

                        <MDBCardBody>
                            <h6 className='pink-text'>
                                <MDBIcon far icon="calendar-alt" /> 2020년 모집마감
                            </h6>

                            <MDBCardTitle className='font-weight-bold'>
                                42서울
                            </MDBCardTitle>

                            <MDBCardText component={'div'}>
                                이노베이션 아카데미
                                <hr />
                                <MDBRow>
                                    <MDBCol md='3'>자격</MDBCol>
                                    <MDBCol md='9' className='text-dark'>성인 또는 고졸</MDBCol>
                                </MDBRow>
                                <MDBRow>
                                    <MDBCol md='3'>혜택</MDBCol>
                                    <MDBCol md='9' className='text-dark'>교육비 무료<br />세전 월 100만원</MDBCol>
                                </MDBRow>
                                <MDBRow>
                                    <MDBCol md='3'>기간</MDBCol>
                                    <MDBCol md='9' className='text-dark'>최대 2년</MDBCol>
                                </MDBRow>
                                <MDBRow>
                                    <MDBCol md='3'>장소</MDBCol>
                                    <MDBCol md='9' className='text-dark'>서울 강남구</MDBCol>
                                </MDBRow>
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>

                <MDBCol md='3'>
                    <MDBCard narrow className="card-margin">
                        <MDBView hover>
                            <MDBCardImage
                                className='card-img-top'
                                src='https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
                                />
                            <MDBMask className="flex-center" overlay='pink-light'>
                                <a href="#" target="_blank" className="card-overlay-text">
                                    자세히 알아보기&nbsp;&nbsp;&nbsp;
                                    <MDBIcon icon="chevron-right" className="mr-1" />
                                </a>
                            </MDBMask>
                        </MDBView>

                        <MDBCardBody>
                            <h6 className='pink-text'>
                                <MDBIcon far icon="calendar-alt" /> ~5/25 4기 모집마감
                            </h6>

                            <MDBCardTitle className='font-weight-bold'>
                                SAFFY
                            </MDBCardTitle>

                            <MDBCardText>
                                삼성청년SW아카데미
                                <hr />
                                <MDBRow>
                                    <MDBCol md='3'>자격</MDBCol>
                                    <MDBCol md='9' className='text-dark'>만 29세 이하</MDBCol>
                                </MDBRow>
                                <MDBRow>
                                    <MDBCol md='3'>혜택</MDBCol>
                                    <MDBCol md='9' className='text-dark'>세전 월 100만원</MDBCol>
                                </MDBRow>
                                <MDBRow>
                                    <MDBCol md='3'>기간</MDBCol>
                                    <MDBCol md='9' className='text-dark'>1년</MDBCol>
                                </MDBRow>
                                <MDBRow>
                                    <MDBCol md='3'>장소</MDBCol>
                                    <MDBCol md='9' className='text-dark'>서울,대전,광주,구미</MDBCol>
                                </MDBRow>
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>

                <MDBCol md='3'>
                    <MDBCard narrow className="card-margin">
                        <MDBView hover>
                            <MDBCardImage
                                className='card-img-top'
                                src='https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
                            />
                            <MDBMask className="flex-center" overlay='pink-light'>
                                <a href="#" target="_blank" className="card-overlay-text">
                                    자세히 알아보기&nbsp;&nbsp;&nbsp;
                                    <MDBIcon icon="chevron-right" className="mr-1" />
                                </a>
                            </MDBMask>
                        </MDBView>

                        <MDBCardBody>
                            <h6 className='pink-text'>
                                <MDBIcon far icon="calendar-alt" /> ~6/30 서류접수
                            </h6>

                            <MDBCardTitle className='font-weight-bold'>
                                부스트캠프
                            </MDBCardTitle>

                            <MDBCardText>
                                네이버 커넥트재단
                                <hr />
                                <MDBRow>
                                    <MDBCol md='3'>자격</MDBCol>
                                    <MDBCol md='9' className='text-dark'>경력 2년미만</MDBCol>
                                </MDBRow>
                                <MDBRow>
                                    <MDBCol md='3'>혜택</MDBCol>
                                    <MDBCol md='9' className='text-dark'></MDBCol>
                                </MDBRow>
                                <MDBRow>
                                    <MDBCol md='3'>기간</MDBCol>
                                    <MDBCol md='9' className='text-dark'>5개월</MDBCol>
                                </MDBRow>
                                <MDBRow>
                                    <MDBCol md='3'>장소</MDBCol>
                                    <MDBCol md='9' className='text-dark'>서울 강남구/성동구</MDBCol>
                                </MDBRow>
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>

                <MDBCol md='3'>
                    <MDBCard narrow className="card-margin">
                        <MDBView hover>
                            <MDBCardImage
                                className='card-img-top'
                                src='https://images.unsplash.com/photo-1573164713436-9be38eba0185?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
                            />
                            <MDBMask className="flex-center" overlay='pink-light'>
                                <a href="#" target="_blank" className="card-overlay-text">
                                    자세히 알아보기&nbsp;&nbsp;&nbsp;
                                    <MDBIcon icon="chevron-right" className="mr-1" />
                                </a>
                            </MDBMask>
                        </MDBView>

                        <MDBCardBody>
                            <h6 className='pink-text'>
                                <MDBIcon far icon="calendar-alt" /> 11기 모집마감
                            </h6>

                            <MDBCardTitle className='font-weight-bold'>
                                SW마에스트로
                            </MDBCardTitle>

                            <MDBCardText>
                                한국정보산업연합회
                                <hr />
                                <MDBRow>
                                    <MDBCol md='3'>자격</MDBCol>
                                    <MDBCol md='9' className='text-dark'>05년도 이전 출생자</MDBCol>
                                </MDBRow>
                                <MDBRow>
                                    <MDBCol md='3'>혜택</MDBCol>
                                    <MDBCol md='9' className='text-dark'>월 100만원 + 장비비</MDBCol>
                                </MDBRow>
                                <MDBRow>
                                    <MDBCol md='3'>기간</MDBCol>
                                    <MDBCol md='9' className='text-dark'>6개월</MDBCol>
                                </MDBRow>
                                <MDBRow>
                                    <MDBCol md='3'>장소</MDBCol>
                                    <MDBCol md='9' className='text-dark'>서울 강남구</MDBCol>
                                </MDBRow>
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}

export default Cards;