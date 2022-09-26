import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './header.scss'
import MegaMenu from "./MegaMenu";
import Login from '../helper/Login'
import SignUp from '../helper/Signup'
import { Container, Figure, Image, Nav, Navbar, NavDropdown, Stack } from "react-bootstrap";
export default function Header() {
  const mega = [{ 'title': 'My Orders', 'to': '/orders', 'imgSrc': '/mega-order.svg', 'imgAlt': 'mega' },
  { 'title': 'My Favourites', 'to': '/favourites', 'imgSrc': '/favourite.svg', 'imgAlt': 'mega' },
  { 'title': 'My Address', 'to': '/address', 'imgSrc': '/address.svg', 'imgAlt': 'mega' },
  ]
  const [hover, setHover] = useState(false)
  const [show, setShow] = useState(true)
  const [isLogin, setIsLogin] = useState(false)

  useEffect(() => {
      getAuthUser()
  })

  const getAuthUser = () => {
    const token = localStorage.getItem('auth_token');
    if(token) {
      setShow(false)
      setIsLogin(false)
    }
  }
  
  const MouseOut = () => {
    setHover(false)
  }
  const handleLogin = () => {
    setShow(!show)
  }

  return (
  <div>
    {/* <header className="main-header bg-header_background ">
      <div className='large-header hidden md:block'>
        <div className='container mx-auto px-[30px] w-full max-w-full'>
          <div className='flex justify-between items-center h-[75px]'>
            <div className='logo-wrapper w-[20%]'>
              <Link to='/'>
                <img src="/header-logo.svg" alt={'testy'}
                />
              </Link>

            </div>
            <div className='navigation-wrapper w-[76%]'>
              <nav className='main-menu text-center'>
                <ul className="navigation-url flex justify-end">
                  {/* {
                  menu?.map((items, index) => {
                    return <li key={index} className='group' onMouseOver={MouseOver} onMouseOut={MouseOut}>
                      <Link to={items.to} className='px-[22px] py-[25px] block hover:text-menu_link_hover_color relative group-hover:after:absolute group-hover:after:content-[""] group-hover:after:w-4/5 group-hover:after:h-[2px] group-hover:after:bg-white group-hover:after:left-1/2 group-hover:after:-translate-x-1/2 group-hover:after:bottom-0 '>{items.title}</Link>
                    </li>
                  })
                // } */}{/*
                  <li key={'home'} className='group'>
                    <Link to={'/'} className='px-[22px] py-[25px] block header-text'>Home</Link>
                  </li>
                  <li key={'kitchen'} className='group'>
                    <Link to={'/kitchen'} className='px-[22px] py-[25px] block header-text'>Kitchen
                      <i className="fa fa-caret-down arrow-icon"></i>
                    </Link>
                  </li>
                  {
                    isLogin?(<li key={'account'} className='group relative' onMouseOver={MouseOver} onMouseOut={MouseOut}>
                    <Link to={'/account'} className='px-[22px] py-[25px] block header-text'>My account
                      <i className="fa fa-caret-down arrow-icon"></i>
                    </Link>
                    {
                      mega.length > 0 && hover && <MegaMenu mega={mega} classes="scrollbar block absolute bg-white z-[99999999] top-full left-1/2 -translate-x-1/2" />
                    }
                  </li>):(<li key={'cart'} className='group'>
                    <a onClick={handleLogin} href='javascript:void(0)' className='px-[22px] py-[25px] block header-text'>Login
                    </a>
                  </li>)
                  }
                  <li key={'cart'} className='group'>
                    <Link to={'/cart'} className='px-[22px] py-[25px] block header-text'>Cart
                      <i className="fa fa-caret-down arrow-icon"></i>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>  */}
    <Navbar bg="#ffffff" expand="sm">
      <Container>
        <Navbar.Brand href="#">
          <img
            src="/header-logo.svg"
            width="200"
            height="200"
            className="d-inline-block align-top"
            alt="Tasty Food"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style={{ marginRight: "9%" }} className="justify-content-end">
          <Nav style={{ fontWeight: "500", lineHeight: "31px", color: "#8E8E93", fontSize: "18px" }}>
            <Nav.Link style={{ margin: "0 3%" }}><Link to={'/'} style={{color:"rgba(0, 0, 0, 0.55)", textDecoration:"none"}}>Home</Link></Nav.Link>
            <NavDropdown style={{ margin: "0 3%" }} title="Kitchen">
              < NavDropdown.Item href="#action/3.1"><Link to={'/kitchen#kitchens'} style={{color:"rgba(0, 0, 0, 0.55)", textDecoration:"none"}}>Popular Kitchens</Link></NavDropdown.Item>
              < NavDropdown.Item href="#action/3.1"><Link to={'/kitchen#foods'} style={{color:"rgba(0, 0, 0, 0.55)", textDecoration:"none"}}>Popular Foods</Link></NavDropdown.Item>
            </NavDropdown>
            <NavDropdown disabled={!isLogin} style={{ margin: "0 3%" }} title="My Account" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Stack direction="horizontal" gap={2}>
                  <Image width={17} height={17} src="mega-payment.svg" />
                  <Link to={'/payment'} style={{color:"#1e2125", textDecoration:"none"}}>Payment details</Link>
                </Stack>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Stack direction="horizontal" gap={2}>
                  <Image width={17} height={17} src="mega-order.svg" />
                  <Link to={'/account'} style={{color:"#1e2125", textDecoration:"none"}}>My orders</Link>
                </Stack>
                </NavDropdown.Item>
              <NavDropdown.Item>
              <Stack direction="horizontal" gap={2}>
                  <Image width={17} height={17} src="mega-notification.svg" />
                  <Link to={'/notifications'} style={{color:"#1e2125", textDecoration:"none"}}>Notifications</Link>
                </Stack>
                </NavDropdown.Item>
              <NavDropdown.Item>
              <Stack direction="horizontal" gap={2}>
                  <Image width={17} height={17} src="mega-inbox.svg" />
                  <Link to={'/inbox'} style={{color:"#1e2125", textDecoration:"none"}}>Inbox</Link>
                </Stack>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown style={{ margin: "0 3%" }} title="Cart" id="basic-nav-dropdown">
              <NavDropdown.Item> <Link to={'/cart'} style={{color:"#1e2125", textDecoration:"none"}}>My Cart</Link></NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Login isShow={show} handleLogin={handleLogin} />
  </div>
  )
}
