import React from 'react';
import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarToggler,
    MDBCollapse,
    MDBNavItem,
    MDBNavLink,
    MDBMask,
    MDBView,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBIcon
} from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import "../index.css";

class FullPageNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    render() {
        return (
            <div id="nav">
                <header>
                    <Router>
                        <MDBNavbar color="bg-dark" fixed="top" dark expand="md" scrolling transparent>
                            <MDBNavbarBrand id="brand" href="/">
                                예발자닷컴
                            </MDBNavbarBrand>
                            {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
                            <MDBCollapse isOpen={this.state.collapse} navbar>
                                <MDBNavbarNav left>
                                    <MDBNavItem className="nav-item-text">
                                        <MDBNavLink to="/yebaljadotcom.html">예발자란?</MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem className="nav-item-text">
                                        <MDBNavLink to="#">부트캠프비교</MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem className="nav-item-text">
                                        <MDBDropdown>
                                            <MDBDropdownToggle nav caret color="secondary">
                                                부트캠프상세
                                            </MDBDropdownToggle>
                                            <MDBDropdownMenu color="secondary">
                                                <MDBDropdownItem>42서울</MDBDropdownItem>
                                                <MDBDropdownItem>SSAFY</MDBDropdownItem>
                                                <MDBDropdownItem>부스트캠프</MDBDropdownItem>
                                                <MDBDropdownItem>멋쟁이사자처럼</MDBDropdownItem>
                                                <MDBDropdownItem>SW마에스트로</MDBDropdownItem>
                                                <MDBDropdownItem divider />
                                                <MDBDropdownItem>연간일정</MDBDropdownItem>
                                            </MDBDropdownMenu>
                                        </MDBDropdown>
                                    </MDBNavItem>
                                    <MDBNavItem className="nav-item-text">
                                        <MDBNavLink to="#">컨퍼런스</MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem className="nav-item-text">
                                        <MDBNavLink to="#">커뮤니티</MDBNavLink>
                                    </MDBNavItem>
                                </MDBNavbarNav>
                            </MDBCollapse>
                        </MDBNavbar>
                    </Router>


                    <MDBView src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=763&q=80">
                        <MDBMask id="main-text" overlay="purple-light" className="flex-center flex-column text-white text-center">
                            <h1>'예비개발자'에서&nbsp;&nbsp;'주니어개발자'로</h1>
                            <br />
                            <h4>개발자 지망생을 위한 최신 정보를 확인하세요!</h4>
                        </MDBMask>
                    </MDBView>

                </header>
            </div>
        );
    }
}

export default FullPageNavbar;