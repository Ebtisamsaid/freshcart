import React, { useContext } from 'react'

import style from './Navbar.module.css'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import logo from '../../assets/freshcart-logo.svg'
import { UserContext } from '../../Context/UserContext'
import { cartcontext } from '../../Context/Cartcontext'


export default function Navbar() {
    let{userLogin ,setuserLogin} = useContext(UserContext)
    let{cartnum}=useContext(cartcontext)
    console.log(cartnum);
    
    let navigate=useNavigate()
    function signOut(){
        localStorage.removeItem('userToken')
        setuserLogin(null)
        navigate('/login')
        
    }
  return <>



<nav className="bg-emerald-200 dark:bg-gray-900 fixed w-full z-50 top-0 start-0  ">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
   

    <Link to="" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} className="h-8" alt="freshcartLogo" />
           
        </Link>
   
    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button  data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
        </svg>
      </button>
    </div>
    <div  className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
      
    {userLogin !=null?   
        
        <ul class="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
            <li>
                <Link to="" className="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</Link>
            </li>
            <li>
                <Link   to="cart" className="text-gray-900 dark:text-white hover:underline">Cart</Link>
            </li>
            <li>
                <Link   to="products" className="text-gray-900 dark:text-white hover:underline">Products</Link>
            </li>
            <li>
                <Link   to="categories" className="text-gray-900 dark:text-white hover:underline">Categories</Link>
            </li>
            <li>
                <Link   to="brands" className="text-gray-900 dark:text-white hover:underline">Brands</Link>
            </li>
        </ul>
 
 :null}
<div className='flex relative left-[40%]'>
      <div className='icons m-5 flex gap-1 items-center'>
      <Link   to="cart" className= " relative flex text-gray-900 dark:text-white "><i class="fa-solid fa-cart-shopping text-xl" ></i> <div className='absolute bottom-4 left-2 flex justify-center items-center p-1 text-l text-white  size-5 bg-emerald-600 rounded-full'>{cartnum}</div></Link>
      <Link   to="wishlist" className= " relative flex text-gray-900 dark:text-white  mx-1"><i class="text-xl fa-regular fa-heart"></i></Link>
      </div>
    <div class=" space-x-6 rtl:space-x-reverse  m-5">

          {userLogin != null ? <span onClick={signOut}  className="text-lg  text-emerald-800 dark:text-emerald-500 hover:underline cursor-pointer">signout</span> : <><Link to="login" class="text-lg  text-emerald-600 dark:text-emerald-500 hover:underline">Login</Link>  <Link to="register" class="text-lg  text-blue-600 dark:text-emerald-500 hover:underline">Register</Link></> }
   
      </div>
    </div>

    </div>
  </div>
</nav>



{/* 
  <nav className="z-50 bg-white border-gray-200 dark:bg-gray-900 flex fixed right-0 left-0 top-0  md:justify-between sm:justify-center flex-wrap  ">
    <div className="flex flex-wrap  items-center  max-w-screen-xl p-4 ">
        
        
        <Link to="" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} className="h-8" alt="Flowbite Logo" />
           
        </Link>
        </div>
    {userLogin !=null?    <div className="max-w-screen-xl px-4 py-3 mt-2 ">
        
        <ul class="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
            <li>
                <Link to="" className="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</Link>
            </li>
            <li>
                <Link   to="cart" className="text-gray-900 dark:text-white hover:underline">Cart</Link>
            </li>
            <li>
                <Link   to="products" className="text-gray-900 dark:text-white hover:underline">Products</Link>
            </li>
            <li>
                <Link   to="categories" className="text-gray-900 dark:text-white hover:underline">Categories</Link>
            </li>
            <li>
                <Link   to="brands" className="text-gray-900 dark:text-white hover:underline">Brands</Link>
            </li>
        </ul>
 
</div> :null}
   

    <div className='flex'>
      <div className='icons m-5 flex gap-1 items-center'>
      <Link   to="cart" className= " relative flex text-gray-900 dark:text-white "><i class="fa-solid fa-cart-shopping text-xl" ></i> <div className='absolute bottom-4 left-2 flex justify-center items-center p-1 text-l text-white  size-5 bg-emerald-600 rounded-full'>{cartnum}</div></Link>
      <Link   to="wishlist" className= " relative flex text-gray-900 dark:text-white  mx-1"><i class="text-xl fa-regular fa-heart"></i></Link>
      </div>
    <div class=" space-x-6 rtl:space-x-reverse  m-5">

          {userLogin != null ? <span onClick={signOut}  className="text-sm  text-blue-600 dark:text-blue-500 hover:underline cursor-pointer">signout</span> : <><Link to="login" class="text-sm  text-blue-600 dark:text-blue-500 hover:underline">Login</Link>  <Link to="register" class="text-sm  text-blue-600 dark:text-blue-500 hover:underline">Register</Link></> }
   
      </div>
    </div> */}
     






   </>
}
