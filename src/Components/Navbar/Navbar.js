import React from 'react'
import "../Navbar/Navbar.css"

const Navbar = () => {
  return (
    <div>
        <nav class="navbar">
     {/*  LOGO  */}
     <div class="logo">Behance</div>
     {/* NAVIGATION MENU */}
     <ul class="nav-links">
       {/* <!-- USING CHECKBOX HACK --> */}
       <input type="checkbox" id="checkbox_toggle" />
       <label for="checkbox_toggle" class="hamburger">&#9776;</label>
       {/* <!-- NAVIGATION MENUS --> */}
       <div class="menu">
         <li><a href="/">For You</a></li>
         <li><a href="/">Discover</a></li>
         <li><a href="/">Livestreams</a></li>
         <li><a href="/">Jobs</a></li>
         <input className='search-bar' type="text" placeholder="Search.."></input>
         <li class="services">
            <button className='share-your-work'>Share Your Work</button>
           {/* <a href="/">Share Your Work</a> */}
           {/* <!-- DROPDOWN MENU --> */}
           <ul class="dropdown">
             <li><a href="/">Projetc</a></li>
             <li><a href="/">Work in Progress</a></li>
             <li><a href="/">Livestream</a></li>
           </ul>
         </li>
         <a>
         <img src='https://www.svgrepo.com/show/50815/mail.svg' className='mail-symbol'/>
         </a>
         <a>
         <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/OOjs_UI_icon_bell.svg/1024px-OOjs_UI_icon_bell.svg.png' className='notify-symbol'/>
         </a>
         <a>
         <img src='http://simpleicon.com/wp-content/uploads/user1.svg' className='user-symbol'/>
         </a>
         <a>
         <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Adobe_Corporate_logo.svg/1200px-Adobe_Corporate_logo.svg.png' className='adobe-symbol'/>
         </a>
       </div>
     </ul>
   </nav>
    </div>
  )
}

export default Navbar