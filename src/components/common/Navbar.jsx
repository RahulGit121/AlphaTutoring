import React from 'react'
import { Link, matchPath } from 'react-router-dom';
import logo from "../../assets/Logo/logo.png";
import {NavbarLinks} from "../../data/navbar-links";
import { IoCartOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import {useLocation} from 'react-router-dom';
import {useSelector} from 'react-redux'
import ProfileDropdown from '../core/Auth/ProfileDropdown';

const Navbar = () => {
//for fetchting data from react store

const {token} = useSelector( (state) => state.auth );
const {user} = useSelector( (state) => state.profile );
const {totalItems} = useSelector( (state) => state.cart );


    // for matching and colouring yellow the selcted navigation
    const location = useLocation();
    const matchRoute = (Route) =>{
        return matchPath({path:Route},location.pathname);
    }

  return (
    <div className='flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700'>
        <div className='w-11/12 max-w-maxContent items-center flex flex-row justify-between '>
        <Link to="/">
            <img src={logo} height={32} width={160} loading='lazy' alt='Logo' />
            
        </Link>

        <nav>
            <ul className='flex gap-x-6'>
                {
                    NavbarLinks.map( (element,index) => (
                       <li key={index}>
                            <Link to={element.path}>
                               <p className={`${matchRoute(element.path) ? "text-yellow-25" : "text-richblack-5"}`}> {element.title}</p>
                            </Link>
                      </li>
                    ))
                }
            </ul>
        </nav>

        <div className='flex gap-2 text-richblack-5  text-lg'>
                
                {
                    user && user?.accountType != "Instructor" && (
                        <Link to="/dashboard/cart" className='relative'>
                            <IoCartOutline size={30} />
                            {
                                totalItems>0 && (
                                    <span>
                                        {totalItems}
                                    </span>
                                )
                            }
                        </Link>
                    )
                }
                {
                    token===null && (
                        <Link to="/login">
                        <button className='border border-richblack-700 bg-richblack-800 px-3 py-1 text-richblack-100 rounded-md text-base'>
                            Log in
                        </button>
                        
                        </Link>
                    )
                }
                {
                       token===null && (
                        <Link to="/signup">
                         <button className='border border-richblack-700 bg-richblack-800 px-3 py-1 text-richblack-100 rounded-md text-base'>
                             Sign up
                        </button>
                        </Link>
                    )
                }
                {
                    token!==null && <ProfileDropdown/>
                        
                }


            <CiSearch size={30}/>
            
            <CgProfile size={30}/>
        </div>
         
        </div>
    </div>
  )
}

export default Navbar
