const Navbar = () => {
    return (
        <>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE-edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Akademi Coding - Rujukan Pengaturacaraan Bahasa Melayu</title>
  <link rel="icon" href="https://www.w3schools.com/favicon.co" />
  <link rel="stylesheet" href="./css/style.css" />
  {/*Font Awesome*/}
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
    integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
    crossOrigin="anonymous"
    referrerPolicy="no-referrer"
  />
  {/*Google Font Family poppins*/}
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap"
    rel="stylesheet"
  />
  {/*Google font Family source sans pro*/}
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
    rel="stylesheet"
  />
  {/*Google font family freckle face*/}
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Freckle+Face&display=swap"
    rel="stylesheet"
  />
  <header>
    <div className="header-left">
      <a href="#" className="menu-btn">
        <div className="akademicoding-logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/W3Schools_logo.svg/1088px-W3Schools_logo.svg.png"
            alt="Akademi Coding - Rujukan Pengaturcaraan Bahasa Melayu"
          />
        </div>
      </a>
      <div href="#Tutorial" className="menu-btn " id="Tutorial-btn">
        Panduan
        <i className="fa-solid fa-caret-down" />
      </div>
      <div href="#references" className="menu-btn " id="references-btn">
        Rujukan
        <i className="fa-solid fa-caret-down " />
      </div>
      <div href="#exercises" className="menu-btn " id="exercises-btn">
        Latihan
        <i className="fa-solid fa-caret-down" />
      </div>
      <a
        href="https://www.w3schools.com/videos/index.php"
        className="menu-btn"
        id="video-btn"
      >
        Video
      </a>
      {/*mobile view menu*/}
      <div className="menu-btn" id="Menu-btn-Mobile">
        Menu
        <i className="fa-solid fa-caret-down" />
      </div>
    </div>
    <div className="header-right">
      <div className="toggleLightDark btn">
        <i className="fa-solid fa-circle-half-stroke" />
      </div>
      <div className="toggleTranslate">
        <i className="fa-solid fa-earth-europe" />
      </div>
      <div className="toggle_Search">
        <i className="fa-solid fa-magnifying-glass" />
      </div>
      <a
        href="https://www.w3schools.com/pro/index.php"
        className="btn btn-link bg-black"
        id="upgrade-btn"
      >
        Naik Taraf
      </a>
      <a
        href="https://campus.w3schools.com/collections/certifications"
        className="btn btn-link bg-pink"
        id="getCertified"
      >
        Dapatkan Sijil
      </a>
      <a
        href="https://www.w3schools.com/spaces/index.php"
        className="btn btn-link bg-yellow"
        id="freeWebsite"
      >
        Laman Web Percuma
      </a>
      <a
        href="https://profile.w3schools.com/log-in?redirect_url=https%3A%2F%2Fmy-learning.w3schools.com"
        className="btn btn-link bg-green"
        id="login-btn"
      >
        Log Masuk
      </a>
    </div>
  </header>
  {/*mobile menu bar*/}
  <div className="mobile-menu-container" id="mobile-menu-nav">
    <div className="mobile-menu-close-btn">
      <a href="" id="mobile-Nav-close">
        <button>
          <i className="fa-solid fa-xmark" />
        </button>
      </a>
    </div>
    <ul>
      <div className="menu-btn-mobile_menu " id="tutorial_menuLink_mobile">
        Panduan
        <i className="fa-solid fa-caret-down" />
        <div
          className="nested-navigation-container_content_Mobile mobile_menuActive_tutorial"
          id="Tutorial_menu_mobile"
        >
          <h1>Panduan</h1>
          <h2>html css</h2>
          <a href="#">random</a>
        </div>
      </div>
      <div className="menu-btn-mobile_menu " id="references_menuLink_mobile">
        Rujukan
        <i className="fa-solid fa-caret-down " />
        <div
          className="nested-navigation-container_content_Mobile mobile_menuActive_tutorial"
          id="references_menu_mobile"
        >
          <h1>Panduan</h1>
          <h2>html css</h2>
          <a href="#">random</a>
        </div>
      </div>
      <div className="menu-btn-mobile_menu " id="exercises_menuLink_mobile">
        Latihan
        <i className="fa-solid fa-caret-down" />
        <div
          className="nested-navigation-container_content_Mobile mobile_menuActive_tutorial"
          id="exercises_menu_mobile"
        >
          <h1>Panduan</h1>
          <h2>html css</h2>
          <a href="#">random</a>
        </div>
      </div>
      <a
        href="https://campus.w3schools.com/collections/certifications"
        className="menu-btn-mobile_menu "
      >
        Dapatkan Sijil
      </a>
      <a
        href="https://www.w3schools.com/pro/index.php"
        className="menu-btn-mobile_menu "
      >
        Naik Taraf
      </a>
      <a
        href="https://www.w3schools.com/spaces/index.php"
        className="menu-btn-mobile_menu "
      >
        Spaces
      </a>
      <a
        href="https://www.w3schools.com/videos/index.php"
        className="menu-btn-mobile_menu"
      >
        Video
      </a>
      <a
        href="https://campus.w3schools.com/collections/course-catalog"
        className="menu-btn-mobile_menu"
      >
        Kedai
      </a>
    </ul>
  </div>
  {/*---Horizontal navbar---*/}
  <div className="horizontal_wrapper">
    <div className="horizontal_Nav_left">
      <div className="horizontalNav_Btn" id="openSidebarMenuID">
        <a href="/">
          <i className="fa-solid fa-house-chimney" />
        </a>
      </div>
      <a
        href="/html"
        className="horizontal_Nav_item"
      >
        HTML
      </a>
      <a href="/css" className="horizontal_Nav_item">
        CSS
      </a>
      <a href="/javascript" className="horizontal_Nav_item">
        javascript
      </a>
      <a href="#" className="horizontal_Nav_item">
        SQL
      </a>
      <a href="#" className="horizontal_Nav_item">
        python
      </a>
      <a href="#" className="horizontal_Nav_item">
        java
      </a>
      <a href="#" className="horizontal_Nav_item">
        php
      </a>
      <a href="#" className="horizontal_Nav_item">
        Bootstrap
      </a>
      <a href="#" className="horizontal_Nav_item">
        how to
      </a>
      <a href="#" className="horizontal_Nav_item">
        w3.css
      </a>
      <a href="#" className="horizontal_Nav_item">
        C
      </a>
      <a href="#" className="horizontal_Nav_item">
        C++
      </a>
    </div>
    <div className="horizontal_Nav_right">
      <div className="toggleLightDark btn">
        <i className="fa-solid fa-circle-half-stroke" />
      </div>
      <div className="toggleTranslate">
        <i className="fa-solid fa-earth-europe" />
      </div>
      <div className="toggle_Search">
        <i className="fa-solid fa-magnifying-glass" />
      </div>
    </div>
  </div>
  {/*nested navigatio bar*/}
  <div
    className="nested-navigation-container nested_navigation_hidden"
    id="nested-navigation-container_id"
  >
    <div
      className="nested-navigation_container_close-btn"
      id="nested-navigation-close-Btn"
    >
      <button>
        <i className="fa-solid fa-xmark" />
      </button>
    </div>
    <div
      className="nested-navigation-container_content"
      id="nested-navigation-container-contentID"
    >
      {/*render all the menu here*/}
    </div>
  </div>
  {/*------*/}
</>

    )
}

export default Navbar;