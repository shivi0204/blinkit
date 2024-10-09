function navbar() {
  return ` 
   <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
      <!-- style css -->
      <link rel="stylesheet" type="text/css" href="css/style.css">
      <!-- Responsive-->
      <link rel="stylesheet" href="css/responsive.css">
      <!-- Tweaks for older IEs-->
      <link rel="stylesheet" href="https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css">
      <!-- fonts -->
  <div id="mainNav">
  <div class="header_section" style="margin-top=30px">
         <div class="container-fluid">
            <nav class="navbar navbar-light bg-light justify-content-between">
               <a class="logo" href="index.html"><img src="images/logo.png"></a>
               <div id="location">
                <img src="https://cdn.grofers.com/assets/ui/out_for_delivery_icon.png" alt=""/>
                <div id="locName"></div>
               </div>
               
   
 
               <form class="form-inline ">
                  <div class="login_text">
                     <ul>
                        <li></li>
                        <li><a href="#"><img src="images/user-icon.png"></a></li>
                        <li><a href="#"><img src="images/bag-icon.png"></a></li>
                        <li> <form class="d-flex" role="search">
                           <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                           <button class="btn btn-outline-success" type="submit">Search</button>
                         </form></li>
                         <li> <div id="mycart">
      <span class="material-icons carticon">shopping_cart</span>
      <span id="myCart" style="font-size=16px">my cart</span>
    </div></li>
                     </ul>
                  </div>
               </form>
               
            </nav>

  
  </div>
 `;
}

export default navbar;
