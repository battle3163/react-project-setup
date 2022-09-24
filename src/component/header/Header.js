import { useState } from "react";
import { Link } from "react-router-dom";
import './header.scss'
import MegaMenu from "./MegaMenu";
import Login from '../helper/Login'
import SignUp from '../helper/Signup'
export default function Header() {
  const mega = [{ 'title': 'My Orders','to':'/orders','imgSrc':'/mega-order.svg' ,'imgAlt':'mega'},
                { 'title': 'My Favourites','to':'/favourites','imgSrc':'/favourite.svg' ,'imgAlt':'mega' },
                { 'title': 'My Address','to':'/address','imgSrc':'/address.svg' ,'imgAlt':'mega' }, 
              ]
  const [hover, setHover] = useState(false)
  const [show, setShow] = useState(false)

  const MouseOver = () => {
    setHover(true)
  }
  let isLogin=true;
  const MouseOut = () => {
    setHover(false)
  }
  const handleLogin = () => {
    setShow(!show)
  }

  return (<div>
    <header className="main-header bg-header_background ">
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
                } */}
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
    </header>
    <Login isShow={show} handleLogin={handleLogin} />
    </div>
  )
}
