const Main = () => {
    return (
        <>
  {/*------*/}
  <section className="section_Heading">
    <div className="section_container">
      <h1>Belajar Kod</h1>
      <p>Dengan pembangun web terbesar di dunia.</p>
      <div className="section_Heading_search">
        <input type="text" placeholder="Search our tutorial, e.g. HTML" />
        <i className="fa-solid fa-magnifying-glass" />
      </div>
      <a href="https://www.w3schools.com/where_to_start.asp">
        Tidak Pasti Di Mana Mula?
      </a>
    </div>
    <svg
      style={{ backgroundColor: "#D9EEE1" }}
      width="100%"
      height={100}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <path id="wavepath" d="M0,0  L110,0C35,150 35,0 0,100z" fill="#282A35" />
    </svg>
  </section>
  <div className="svgBug" />
  <section className="section_html">
    <div className="section_left">
      <h1>HTML</h1>
      <p>Bahasa untuk membina halaman web</p>
      <a href="https://www.w3schools.com/html/default.asp" className="bg-green">
        Belajar HTML
      </a>
      <a
        href="https://www.w3schools.com/videos/index.php"
        className="bg-yellow"
      >
        Video Panduan
      </a>
      <a href="https://www.w3schools.com/tags/default.asp" className="bg-black">
        Rujukan HTML
      </a>
      <a
        href="https://campus.w3schools.com/collections/certifications/products/html-certificate"
        className="bg-pink"
      >
        Dapatkan Sijil
      </a>
    </div>
    <div className="section_right">
      <div className="editor_container">
        <h1>Contoh HTML :</h1>
        <div className="editor" id="htmlCode"></div>
        <a
          href="https://www.w3schools.com/html/tryit.asp?filename=tryhtml_default_default"
          className="editor_btn"
        >
          Cuba Sendiri
        </a>
      </div>
    </div>
  </section>
  <section className="section_css">
    <div className="section_left">
      <h1>CSS</h1>
      <p>Bahasa untuk menghias halaman web</p>
      <a href="https://www.w3schools.com/css/default.asp" className="bg-green">
        Belajar CSS
      </a>
      <a href="https://www.w3schools.com/cssref/index.php" className="bg-black">
        Rujukan CSS
      </a>
      <a
        href="https://campus.w3schools.com/collections/certifications/products/css-certificate"
        className="bg-pink"
      >
        Dapatkan Sijil
      </a>
    </div>
    <div className="section_right">
      <div className="editor_container">
        <h1>Contoh CSS :</h1>
        <div className="editor" id="cssCode"></div>
        <a
          href="https://www.w3schools.com/css/tryit.asp?filename=trycss_default"
          className="editor_btn"
        >
          Cuba Sendiri
        </a>
      </div>
    </div>
  </section>
  <section className="section_javascript">
    <div className="section_left">
      <h1>JavaScript</h1>
      <p>Bahasa untuk memprogram halaman web</p>
      <a href="https://www.w3schools.com/css/default.asp" className="bg-green">
        Belajar JavaScript
      </a>
      <a href="https://www.w3schools.com/cssref/index.php" className="bg-white">
        Rujukan JavaScript
      </a>
      <a
        href="https://campus.w3schools.com/collections/certifications/products/css-certificate"
        className="bg-pink"
      >
        Dapatkan Sijil
      </a>
    </div>
    <div className="section_right">
      <div className="editor_container">
        <h1>Contoh JavaScript :</h1>
        <div className="editor" id="javaScriptCode"></div>
        <a
          href="https://www.w3schools.com/js/tryit.asp?filename=tryjs_default"
          className="editor_btn"
        >
          Cuba Sendiri
        </a>
      </div>
    </div>
  </section>
  <section className="section_python">
    <div className="section_left">
      <h1>Python</h1>
      <p>Bahasa pengaturcaraan yang popular</p>
      <a
        href="https://www.w3schools.com/python/default.asp"
        className="bg-green"
      >
        Belajar Python
      </a>
      <a
        href="https://www.w3schools.com/python/python_reference.asp"
        className="bg-black"
      >
        Rujukan Python
      </a>
      <a
        href="https://campus.w3schools.com/collections/certifications/products/python-certificate"
        className="bg-pink"
      >
        Dapatkan Sijil
      </a>
    </div>
    <div className="section_right">
      <div className="editor_container">
        <h1>Contoh Python :</h1>
        <div className="editor" id="pythonCode"></div>
        <a
          href="https://www.w3schools.com/python/trypython.asp?filename=demo_indentation"
          className="editor_btn"
        >
          Cuba Sendiri
        </a>
      </div>
    </div>
  </section>
  <section className="section_sql">
    <div className="section_left">
      <h1>SQL</h1>
      <p>Bahasa untuk mengakses pangkalan data</p>
      <a href="https://www.w3schools.com/sql/default.asp" className="bg-green">
        Belajar SQL
      </a>
      <a
        href="https://www.w3schools.com/sql/sql_ref_keywords.asp"
        className="bg-black"
      >
        Rujukan SQL
      </a>
      <a
        href="https://campus.w3schools.com/collections/certifications/products/sql-certificate"
        className="bg-pink"
      >
        Dapatkan Sijil
      </a>
    </div>
    <div className="section_right">
      <div className="editor_container">
        <h1>Contoh SQL :</h1>
        <div className="editor" id="SQLCode"></div>
        <a
          href="https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_where"
          className="editor_btn"
        >
          Cuba Sendiri
        </a>
      </div>
    </div>
  </section>
  {/*------*/}
  <section className="courses_card_container">
    <div className="courses_bigCard">
      <div className="bg-pink">
        <h2>PHP</h2>
        <p>Sebuah bahasa pemrograman server web</p>
        <a href="https://www.w3schools.com/php/default.asp">
          <button className="bg-black btn">Belajar PHP</button>
        </a>
      </div>
      <div className="bg-yellow">
        <h2>jQuery</h2>
        <p>Sebuah perpustakaan JS untuk mengembangkan halaman web</p>
        <a href="https://www.w3schools.com/jquery/default.asp">
          <button className="bg-black btn">Belajar jQuery</button>
        </a>
      </div>
      <div className="bg-white">
        <h2>Java</h2>
        <p>Sebuah bahasa pemrograman</p>
        <a href="https://www.w3schools.com/java/default.asp">
          <button className="bg-black btn">Belajar Java</button>
        </a>
      </div>
      <div className="bg-lightgreen">
        <h2>C++</h2>
        <p>Sebuah bahasa pemrograman</p>
        <a href="https://www.w3schools.com/cpp/default.asp">
          <button className="bg-black btn">Belajar C++</button>
        </a>
      </div>
      <div className="bg-blue">
        <h2>W3.CSS</h2>
        <p>
          Kerangka CSS untuk laman web yang lebih cepat dan responsif yang lebih
          baik
        </p>
        <a href="https://www.w3schools.com/w3css/default.asp">
          <button className="bg-black btn">Belajar W3.CSS</button>
        </a>
      </div>
      <div className="bg-white">
        <h2>Bootstrap</h2>
        <p>
          Sebuah kerangka CSS untuk mereka bentuk halaman web yang lebih baik
        </p>
        <a href="https://www.w3schools.com/bootstrap/bootstrap_ver.asp">
          <button className="bg-black btn">Belajar Bootstrap</button>
        </a>
      </div>
    </div>
    <div className="courses_middleCard">
      <a href="https://www.w3schools.com/c/index.php" className="bg-pink">
        <h2>C</h2>
      </a>
      <a href="https://www.w3schools.com/cs/index.php" className="bg-yellow">
        <h2>C#</h2>
      </a>
    </div>
    <div className="courses_smallCard">
      <a className="bg-white" href="https://www.w3schools.com/r/default.asp">
        R
      </a>
      <a
        className="bg-lightgreen"
        href="https://www.w3schools.com/kotlin/index.php"
      >
        Kotlin
      </a>
      <a
        className="bg-blue"
        href="https://www.w3schools.com/nodejs/default.asp"
      >
        Node.js
      </a>
      <a className="bg-pink" href="https://www.w3schools.com/react/default.asp">
        React
      </a>
      <a className="bg-yellow" href="https://www.w3schools.com/js/js_json.asp">
        JSON
      </a>
      <a
        className="bg-white"
        href="https://www.w3schools.com/angular/default.asp"
      >
        AngularJS
      </a>
      <a
        className="bg-lightgreen"
        href="https://www.w3schools.com/mysql/default.asp"
      >
        MySQL
      </a>
      <a className="bg-blue" href="https://www.w3schools.com/xml/default.asp">
        XML
      </a>
      <a className="bg-pink" href="https://www.w3schools.com/sass/default.php">
        Sass
      </a>
      <a
        className="bg-yellow"
        href="https://www.w3schools.com/icons/default.asp"
      >
        Icons
      </a>
      <a
        className="bg-white"
        href="https://www.w3schools.com/css/css_rwd_intro.asp"
      >
        RWD
      </a>
      <a
        className="bg-lightgreen"
        href="https://www.w3schools.com/graphics/default.asp"
      >
        Graphics
      </a>
      <a
        className="bg-blue"
        href="https://www.w3schools.com/graphics/svg_intro.asp"
      >
        SVG
      </a>
      <a
        className="bg-pink"
        href="https://www.w3schools.com/graphics/canvas_intro.asp"
      >
        Canvas
      </a>
      <a
        className="bg-yellow"
        href="https://www.w3schools.com/nodejs/nodejs_raspberrypi.asp"
      >
        Raspberry Pi
      </a>
      <a
        className="bg-white"
        href="https://www.w3schools.com/cybersecurity/index.php"
      >
        Cyber Security
      </a>
      <a
        className="bg-lightgreen"
        href="https://www.w3schools.com/colors/default.asp"
      >
        Colors
      </a>
      <a className="bg-blue" href="https://www.w3schools.com/git/default.asp">
        Git
      </a>
      <a
        className="bg-pink"
        href="https://www.w3schools.com/python/matplotlib_intro.asp"
      >
        Matplotlib
      </a>
      <a
        className="bg-yellow"
        href="https://www.w3schools.com/python/numpy/default.asp"
      >
        NumPy
      </a>
      <a
        className="bg-white"
        href="https://www.w3schools.com/python/pandas/default.asp"
      >
        Pandas
      </a>
      <a
        className="bg-lightgreen"
        href="https://www.w3schools.com/python/scipy/index.php"
      >
        SciPy
      </a>
      <a className="bg-blue" href="https://www.w3schools.com/asp/default.asp">
        ASP
      </a>
      <a
        className="bg-pink"
        href="https://www.w3schools.com/accessibility/index.php"
      >
        Accessibility
      </a>
      <a
        className="bg-yellow"
        href="https://www.w3schools.com/appml/default.asp"
      >
        AppML
      </a>
      <a className="bg-white" href="https://www.w3schools.com/go/index.php">
        Go
      </a>
      <a
        className="bg-lightgreen"
        href="https://www.w3schools.com/typescript/index.php"
      >
        TypeScript
      </a>
      <a className="bg-blue" href="https://www.w3schools.com/django/index.php">
        Django
      </a>
      <a className="bg-pink" href="https://www.w3schools.com/mongodb/index.php">
        MongoDB
      </a>
      <a
        className="bg-yellow"
        href="https://www.w3schools.com/statistics/index.php"
      >
        Statistics
      </a>
      <a
        className="bg-white"
        href="https://www.w3schools.com/datascience/default.asp"
      >
        Data Science
      </a>
      <a
        className="bg-lightgreen"
        href="https://www.w3schools.com/typingspeed/default.asp"
      >
        Typing Speed
      </a>
    </div>
    <div className="courses_middleCard courses-middleCard-padding">
      <a href="https://www.w3schools.com/excel/index.php" className="bg-blue">
        <h2>Excel</h2>
      </a>
      <a
        href="https://www.w3schools.com/googlesheets/index.php"
        className="bg-yellow"
      >
        <h2>Google Sheets</h2>
      </a>
    </div>
    <div className="courses_middleCard courses-middleCard-padding">
      <a
        href="https://www.w3schools.com/python/python_ml_getting_started.asp"
        className="bg-pink"
      >
        <h2>Machine Learning</h2>
      </a>
      <a href="https://www.w3schools.com/ai/default.asp" className="bg-white">
        <h2>Artificial Inteligence</h2>
      </a>
    </div>
    {/*--------code editor--------*/}
    <div className="codeEditor_part">
      <h1>Editor Kod</h1>
      <p>
        Dengan editor kod kami, anda boleh mengedit kod dan melihat hasilnya
        dalam pelayar anda
      </p>
      <div className="codeEditor_part_container">
        <div className="codeEditor_part_Container_Top">
          <div className="codeEditor_part_left">
            <div className="codeEditor_dot " style={{ background: "red" }} />
            <div className="codeEditor_dot" style={{ background: "yellow" }} />
            <div className="codeEditor_dot" style={{ background: "green" }} />
          </div>
          <div className="codeEditor_part_right">
            www.academicoding.com/tryit/
          </div>
        </div>
        <div className="codeEditor_condition">
          <div className="active" id="codeEditor_frontend">
            Frontend
          </div>
          <div className="" id="codeEditor_backend">
            Backend
          </div>
        </div>
        <img
          src="https://www.w3schools.com/codeeditor.gif"
          id="animationCodeEditorPart"
        />
      </div>
      <div className="codeEditor_Btn-Container">
        <a
          href="https://www.w3schools.com/tryit/tryit.asp?filename=tryhtml_hello"
          className="bg-green btn btn-codeEditor_down"
        >
          Cuba Editor Frontend (HTML/CSS/JS)
        </a>
        <a
          href="https://www.w3schools.com/tryit/trycompiler.asp?filename=demo_python"
          className="bg-yellow btn btn-codeEditor_down"
        >
          Cuba Editor Backend (Python/PHP/Java/C..)
        </a>
      </div>
    </div>
    {/*--------AcademyCoding.com Spaces--------*/}
    <div className="w3Schools_Space_container">
      <h1>AcademyCoding.com Spaces</h1>
      <p>Bina laman web anda sendiri dengan AcademyCoding.com Spaces.</p>
      <img src="https://www.w3schools.com/pro/pic_spaces_ide.png" />
      {/*--------how it work--------*/}
      <img
        src="https://www.w3schools.com/how-spaces-works3.png"
        className="w3schools_space_image_howitwork"
      />
      <a
        href="https://www.w3schools.com/spaces/index.html"
        className="bg-green getStartedNowBtn"
      >
        Mula sekarang
      </a>
    </div>
  </section>
  {/*--------my learning--------*/}
  <section className="learning_section bg-lightgreen">
    <div className="learning_container">
      <h1>Pembelajaranku</h1>
      <p>
        Jejak kemajuan Anda dengan program "Pembelajaranku" kami yang percuma.
      </p>
      <p>Log masuk ke akaun anda dan mula kumpul mata!</p>
      <img src="https://www.w3schools.com/myl-green-off.png" />
      <a
        href="https://my-learning.w3schools.com/"
        className="bg-green signupFree btn"
      >
        Daftar secara percuma
      </a>
    </div>
  </section>
  {/*--------Become a PRO User--------*/}
  <section className="bg-black becomeProUser">
    <div className="becomeaPro-container">
      <h1>Jadi Pengguna PRO</h1>
      <p className="becomePro_unlock">Dan buka ciri-ciri yang berkuasa:</p>
      <div className="becomeFeature_list">
        <div className="becomeFeature_items">
          <img src="https://www.w3schools.com/spaces/files/check3.db67d31e.svg" />
          <p>Melihat AcademyCoding.com tanpa iklan</p>
        </div>
        <div className="becomeFeature_items">
          <img src="https://www.w3schools.com/spaces/files/check3.db67d31e.svg" />
          <p>
            Pelayan laman web (Termasuk{" "}
            <a href="https://www.w3schools.com/spaces/index.php">Spaces</a> PRO)
          </p>
        </div>
        <div className="becomeFeature_items">
          <img src="https://www.w3schools.com/spaces/files/check3.db67d31e.svg" />
          <p>
            Akses ke{" "}
            <a href="https://www.w3schools.com/videos/index.php">
              Tutorial Video HTML{" "}
            </a>
            kami
          </p>
        </div>
      </div>
      <button className="bg-green btn">
        <a href="">Ketahui Lebih Lanjut</a>
      </button>
    </div>
  </section>
  {/*--------color section--------*/}
  <div className="colorSection">
    <div className="colorSection_container">
      <h1>Pemilih Warna</h1>
      <p>Pemilih warna terkenal AcademyCoding.com:</p>
      <img src="https://www.w3schools.com/images/colorpicker.png" />
    </div>
  </div>
  {/*--------code game--------*/}
  <section className="codeGame_container">
    <h1>Kod Permainan</h1>
    <p>Bantu Lynx mengumpul buah pine cone!</p>
    <img src="https://www.w3schools.com/images/w3lynx_200.png" />
    <div className="codeGameBtn_container">
      <button className="bg-black">
        <a href="https://www.w3schools.com/codegame/index.html">
          Main Permainan
        </a>
      </button>
    </div>
  </section>
  {/* exercise and quiz */}
  <div className="section_exercise">
    <div className="section_exercise_container">
      <h1>Latihan dan Kuiz</h1>
      <p>Uji kemahiran anda!</p>
      <div className="section_exercise_quiz">
        <a
          href="https://www.w3schools.com/exercises/index.php"
          className="bg-green"
        >
          Latihan
        </a>
        <a
          href="https://www.w3schools.com/quiztest/default.asp"
          className="bg-yellow"
        >
          Kuiz
        </a>
      </div>
    </div>
  </div>
  {/* web Template */}
  <div className="webTemplate">
    <div className="web_template_container">
      <h1>Templat Web</h1>
      <p>Terokai pilihan Templat HTML responsif percuma kami</p>
      <a href="https://www.w3schools.com/w3css/w3css_templates.asp">
        <img src="https://www.w3schools.com/w3css_templates.jpg" />
      </a>
      <a href="#" className="webTemplateLink bg-black">
        Terokai Templat
      </a>
    </div>
  </div>
  {/* kick start */}
  <section className="kickStart_section">
    <div className="kickStart_container">
      <h1>Mulakan kerjaya anda</h1>
      <h1>Dapatkan pensijilan dengan menamatkan kursus</h1>
      <a
        href="https://campus.w3schools.com/collections/course-catalog"
        className="bg-green"
      >
        Mula
      </a>
    </div>
    <div className="kickstart_certified">
      <div className="kickstart_arrow">
        <svg
          id="w3_cert_arrow_default"
          viewBox="0 0 170 143"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.7747 42.7064C9.7747 42.7064 19.5575 77.2951 44.4558 84.8113C62.0225 90.1142 81.0061 80.1196 77.791 68.3309C76.0904 62.0955 69.0574 62.4735 65.5106 65.8444C59.1003 71.9368 67.8591 89.7423 77.9205 96.1324C112.816 118.295 161.943 84.5867 161.943 84.5867"
            stroke="white"
            strokeWidth={2}
            strokeLinecap="round"
          />
          <path
            d="M159.804 93.8429L162.704 84.4917L152.715 80.8293"
            stroke="white"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <svg
        id="w3_cert_badge_default"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 300 300"
      >
        <defs>
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n                    .cls-1 {\n                        fill: #04aa6b;\n                    }\n\n                    .cls-2 {\n                        font-size: 23px;\n                    }\n\n                    .cls-2,\n                    .cls-3,\n                    .cls-4 {\n                        fill: #fff;\n                    }\n\n                    .cls-2,\n                    .cls-3 {\n                        font-family: RobotoMono-Medium, Roboto Mono;\n                        font-weight: 500;\n                    }\n\n                    .cls-3 {\n                        font-size: 20.08px;\n                    }\n                "
            }}
          />
        </defs>
        <circle
          className="cls-1"
          cx={150}
          cy={150}
          r="146.47"
          transform="translate(-62.13 150) rotate(-45)"
        />
        <text
          className="cls-2"
          transform="translate(93.54 63.89) rotate(-29.5)"
        >
          w
        </text>
        <text
          className="cls-2"
          transform="translate(107.13 56.35) rotate(-20.8)"
        >
          3
        </text>
        <text
          className="cls-2"
          transform="matrix(0.98, -0.21, 0.21, 0.98, 121.68, 50.97)"
        >
          s
        </text>
        <text
          className="cls-2"
          transform="translate(136.89 47.84) rotate(-3.47)"
        >
          c
        </text>
        <text
          className="cls-2"
          transform="translate(152.39 47.03) rotate(5.12)"
        >
          h
        </text>
        <text
          className="cls-2"
          transform="translate(167.85 48.54) rotate(13.72)"
        >
          o
        </text>
        <text
          className="cls-2"
          transform="translate(182.89 52.35) rotate(22.34)"
        >
          o
        </text>
        <text
          className="cls-2"
          transform="matrix(0.86, 0.52, -0.52, 0.86, 197.18, 58.36)"
        >
          l
        </text>
        <text
          className="cls-2"
          transform="matrix(0.77, 0.64, -0.64, 0.77, 210.4, 66.46)"
        >
          s
        </text>
        <text
          className="cls-3"
          transform="translate(35.51 186.66) rotate(69.37)"
        >
          {" "}
        </text>
        <text
          className="cls-3"
          transform="matrix(0.47, 0.88, -0.88, 0.47, 41.27, 201.28)"
        >
          C
        </text>
        <text
          className="cls-3"
          transform="matrix(0.58, 0.81, -0.81, 0.58, 48.91, 215.03)"
        >
          E
        </text>
        <text
          className="cls-3"
          transform="matrix(0.67, 0.74, -0.74, 0.67, 58.13, 227.36)"
        >
          R
        </text>
        <text
          className="cls-3"
          transform="translate(69.16 238.92) rotate(39.44)"
        >
          T
        </text>
        <text
          className="cls-3"
          transform="matrix(0.85, 0.53, -0.53, 0.85, 81.47, 248.73)"
        >
          I
        </text>
        <text
          className="cls-3"
          transform="translate(94.94 256.83) rotate(24.36)"
        >
          F
        </text>
        <text
          className="cls-3"
          transform="translate(109.34 263.09) rotate(16.83)"
        >
          I
        </text>
        <text
          className="cls-3"
          transform="translate(124.46 267.41) rotate(9.34)"
        >
          E
        </text>
        <text
          className="cls-3"
          transform="translate(139.99 269.73) rotate(1.88)"
        >
          D
        </text>
        <text
          className="cls-3"
          transform="translate(155.7 270.01) rotate(-5.58)"
        >
          {" "}
        </text>
        <text
          className="cls-3"
          transform="translate(171.32 268.24) rotate(-13.06)"
        >
          {" "}
        </text>
        <text
          className="cls-2"
          transform="translate(187.55 266.81) rotate(-21.04)"
        >
          .
        </text>
        <text
          className="cls-3"
          transform="translate(203.27 257.7) rotate(-29.24)"
        >
          {" "}
        </text>
        <text
          className="cls-3"
          transform="translate(216.84 249.83) rotate(-36.75)"
        >
          {" "}
        </text>
        <text
          className="cls-3"
          transform="translate(229.26 240.26) rotate(-44.15)"
        >
          2
        </text>
        <text
          className="cls-3"
          transform="translate(240.39 229.13) rotate(-51.62)"
        >
          0
        </text>
        <text
          className="cls-3"
          transform="translate(249.97 216.63) rotate(-59.17)"
        >
          2
        </text>
        <text
          className="cls-3"
          transform="matrix(0.4, -0.92, 0.92, 0.4, 257.81, 203.04)"
        >
          3
        </text>
        <path
          className="cls-4"
          d="M196.64,136.31s3.53,3.8,8.5,3.8c3.9,0,6.75-2.37,6.75-5.59,0-4-3.64-5.81-8-5.81h-2.59l-1.53-3.48,6.86-8.13a34.07,34.07,0,0,1,2.7-2.85s-1.11,0-3.33,0H194.79v-5.86H217.7v4.28l-9.19,10.61c5.18.74,10.24,4.43,10.24,10.92s-4.85,12.3-13.19,12.3a17.36,17.36,0,0,1-12.41-5Z"
        ></path>
        <path
          className="cls-4"
          d="M152,144.24l30.24,53.86,14.94-26.61L168.6,120.63H135.36l-13.78,24.53-13.77-24.53H77.93l43.5,77.46.15-.28.16.28Z"
        ></path>
      </svg>
    </div>
  </section>
  {/* How To Section */}
  <section className="howtosection_section">
    <div className="howtoSection_container">
      <h1>Bahagian Cara-cara</h1>
      <p>Potongan kod untuk HTML, CSS, dan JavaScript</p>
      <p>Sebagai contoh, cara untuk membuat slaidshow:</p>
      <div className="codeEditor_part_container">
        <div className="codeEditor_part_Container_Top">
          <div className="codeEditor_part_left">
            <div className="codeEditor_dot " style={{ background: "red" }} />
            <div className="codeEditor_dot" style={{ background: "yellow" }} />
            <div className="codeEditor_dot" style={{ background: "green" }} />
          </div>
          <div className="codeEditor_part_right">
            www.academycoding.com/howto/
          </div>
        </div>
        <div className="howtosection_ImageSlider">
          <div className="howtoSection_button">
            <button className="imageSlidePreve">
              <i className="fa-solid fa-angle-left" />
            </button>
            <button className="imageSlideNext">
              <i className="fa-solid fa-angle-right" />
            </button>
          </div>
          <div className="howtosection_list">
            <div className="howtoSecton_item">
              <p>1/3</p>
              <img src="https://www.w3schools.com/howto/img_nature_wide.jpg" />
              <p>Teks Kapsyen</p>
            </div>
            <div className="howtoSecton_item">
              <p>2/3</p>
              <img src="https://www.w3schools.com/howto/img_snow_wide.jpg" />
              <p>Kapsyen Dua</p>
            </div>
            <div className="howtoSecton_item">
              <p>3/3</p>
              <img src="https://www.w3schools.com/howto/img_mountains_wide.jpg" />
              <p>Kapsyen Tiga</p>
            </div>
          </div>
          <div className="howtosection_active_image">
            <div className="imageSlideActive" id="imageSlideActive1" />
            <div className="imageSlideActive" id="imageSlideActive2" />
            <div className="imageSlideActive" id="imageSlideActive3" />
          </div>
        </div>
      </div>
      <div className="howtosection_bottom">
        <div className="verticalBox" />
        <a href="https://www.w3schools.com/howto/default.asp">
          Belajar Cara-cara
        </a>
      </div>
    </div>
  </section>
</>

    )
}

export default Main