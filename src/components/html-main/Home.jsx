const Home = () => {
    return (
        <>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE-edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Panduan HTML</title>
  <link rel="stylesheet" href="../../../css/style.css" />
  {/*Font Awesome*/}
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
    integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
    crossOrigin="anonymous"
    referrerPolicy="no-referrer"
  />
  <div className="wrapper_HTML_home">
    <main className="wrapper_html_content_home">
      <section className="wrapper-html-home_heading_section">
        <h1>Panduan HTML</h1>
        <div className="HTML_btn_container">
          <a href="/" id="homeLinkPageID" className="bg-green">
            <i className="fa-solid fa-angle-left" />
            Laman Utama
          </a>
          <a href="/html/introduction" className="bg-green">
            Seterusnya
            <i className="fa-solid fa-angle-right" />
          </a>
        </div>
      </section>
      <section className="wrapper-html-home_body_section">
        <div className="bg-lightGreen content_html">
          <p>HTML ialah bahasa markah standard untuk halaman web.</p>
          <p>Dengan HTML, anda boleh mencipta laman web anda sendiri.</p>
          <p>HTML mudah untuk dipelajari - Anda akan menikmatinya!</p>
          <a href="https://www.w3schools.com/html/html_intro.asp" className="bg-green">
            Pelajari Tutorial HTML percuma kami
            <i className="fa-solid fa-angles-right" />
          </a>
        </div>
      </section>
    </main>
    {/* advertisement */}
    <aside className="container_advertisement">Iklan</aside>
  </div>
</>

    )
}

export default Home;