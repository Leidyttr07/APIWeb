import "./youtube.css"

export const metadata = {
  title: "YouTube",
  description: "YouTube Clone - Pixel Perfect",
}

export default function YouTubePage() {
  return (
    <>
      {/* ===== HEADER ===== */}
      <header className="yt-header">
        {/* Left: Menu + Logo */}
        <div className="yt-header-left">
          <button className="yt-menu-btn" aria-label="Menu">
            <div className="yt-menu-icon">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
          <a href="#" className="yt-logo" aria-label="YouTube Home">
            <svg viewBox="0 0 90 20" preserveAspectRatio="xMidYMid meet" focusable="false">
              <g>
                <path d="M27.9727 3.12324C27.6435 1.89323 26.6768 0.926623 25.4468 0.597366C23.2197 2.24288e-07 14.285 0 14.285 0C14.285 0 5.35042 2.24288e-07 3.12323 0.597366C1.89323 0.926623 0.926623 1.89323 0.597366 3.12324C2.24288e-07 5.35042 0 10 0 10C0 10 2.24288e-07 14.6496 0.597366 16.8768C0.926623 18.1068 1.89323 19.0734 3.12323 19.4026C5.35042 20 14.285 20 14.285 20C14.285 20 23.2197 20 25.4468 19.4026C26.6768 19.0734 27.6435 18.1068 27.9727 16.8768C28.5701 14.6496 28.5701 10 28.5701 10C28.5701 10 28.5677 5.35042 27.9727 3.12324Z" fill="#FF0000"/>
                <path d="M11.4253 14.2854L18.8477 10.0004L11.4253 5.71533V14.2854Z" fill="white"/>
              </g>
              <g>
                <path d="M34.6024 13.0036L31.3945 1.41846H34.1932L35.3174 6.6701C35.6043 7.96361 35.8136 9.06662 35.95 9.97913H36.0323C36.1264 9.32532 36.3381 8.22937 36.665 6.68892L37.8291 1.41846H40.6278L37.3799 13.0036V18.561H34.6001V13.0036H34.6024Z" fill="white"/>
                <path d="M41.4697 18.1937C40.9053 17.8127 40.5031 17.22 40.2632 16.4157C40.0257 15.6114 39.9058 14.5765 39.9058 13.3092V11.3268C39.9058 10.0372 40.0422 8.98917 40.3154 8.18093C40.5765 7.37269 41.0135 6.78004 41.6242 6.39908C42.2373 6.02049 43.0661 5.83003 44.1132 5.83003C45.1355 5.83003 45.9525 6.02812 46.5613 6.42198C47.1701 6.81584 47.6071 7.4222 47.8682 8.24272C48.1293 9.06088 48.2616 10.1184 48.2616 11.4127V13.1492H42.6638V13.7557C42.6638 14.7513 42.7885 15.4765 43.0379 15.9348C43.2849 16.3931 43.7342 16.6222 44.3853 16.6222C44.8494 16.6222 45.2024 16.4576 45.4446 16.1284C45.6868 15.7969 45.8068 15.3127 45.8068 14.6754V14.0313H48.2616V14.5765C48.2616 15.7921 47.8953 16.7518 47.1628 17.4514C46.4303 18.1534 45.4634 18.5765 44.2616 18.5765C42.8955 18.5765 41.9567 18.2914 41.4697 18.1937ZM44.9474 11.6411V10.8205C44.9474 9.88916 44.842 9.20588 44.6346 8.77282C44.4271 8.33976 44.0766 8.12205 43.5834 8.12205C43.1025 8.12205 42.7638 8.33976 42.5635 8.77282C42.3632 9.20588 42.2638 9.88916 42.2638 10.8205V11.6411H44.9474Z" fill="white"/>
                <path d="M56.8154 18.5765H54.6094L54.3648 17.0548H54.3037C53.7039 18.1094 52.8516 18.5765 51.7529 18.5765C50.9954 18.5765 50.4329 18.3036 50.0647 17.7554C49.6965 17.2095 49.5124 16.386 49.5124 15.2857V6.04489H52.2709V15.0177C52.2709 15.5777 52.3361 15.9842 52.4694 16.2396C52.6003 16.495 52.8269 16.6222 53.1491 16.6222C53.4289 16.6222 53.6958 16.5292 53.9475 16.3432C54.1992 16.1572 54.3836 15.928 54.5028 15.6538V6.04489H57.2613V18.5765H56.8154Z" fill="white"/>
                <path d="M64.4755 3.68758H61.6768V18.5765H58.9181V3.68758H56.1194V1.42041H64.4755V3.68758Z" fill="white"/>
                <path d="M72.6428 18.5765H70.4368L70.1922 17.0548H70.1311C69.5765 18.1094 68.7218 18.5765 67.6231 18.5765C66.8656 18.5765 66.3031 18.3036 65.9349 17.7554C65.5667 17.2095 65.3826 16.386 65.3826 15.2857V6.04489H68.1411V15.0177C68.1411 15.5777 68.2063 15.9842 68.3396 16.2396C68.4705 16.495 68.6972 16.6222 69.0194 16.6222C69.2992 16.6222 69.5661 16.5292 69.8178 16.3432C70.0695 16.1572 70.2539 15.928 70.373 15.6538V6.04489H73.1316V18.5765H72.6428Z" fill="white"/>
                <path d="M76.0228 16.3979C76.1561 16.7577 76.4056 16.9378 76.7702 16.9378C77.2602 16.9378 77.5966 16.7247 77.7817 16.2984C77.9667 15.8722 78.058 15.1469 78.058 14.1231V13.2137H78.1191C78.4413 13.8179 78.9688 14.1231 79.6999 14.1231C80.4314 14.1231 80.9729 13.7768 81.3246 13.0842C81.6762 12.3916 81.8543 11.3449 81.8543 9.93909V8.93575C81.8543 7.16473 81.641 5.87839 81.2143 5.07722C80.7876 4.27605 80.0678 3.87546 79.0522 3.87546C78.3984 3.87546 77.8545 4.06358 77.4183 4.43981C76.982 4.81604 76.6527 5.34573 76.4312 6.02901L76.2795 4.04483H73.7183V18.5765H76.0228V16.3979ZM76.7702 12.0445C76.7702 11.3425 76.8354 10.8217 76.9711 10.4817C77.1045 10.1417 77.3359 9.97174 77.6628 9.97174C77.9919 9.97174 78.2209 10.1535 78.3566 10.5194C78.49 10.8828 78.558 11.4506 78.558 12.2212V13.0842C78.558 13.9218 78.49 14.5342 78.3566 14.9213C78.2209 15.3084 77.9872 15.5008 77.6534 15.5008C77.3335 15.5008 77.1069 15.3366 76.9711 15.0084C76.8354 14.6801 76.7702 14.1066 76.7702 13.2843V12.0445Z" fill="white"/>
                <path d="M83.6857 17.3885C83.3246 16.8427 83.1429 16.0147 83.1429 14.9096V12.9272C83.1429 11.6823 83.3152 10.6756 83.6621 9.90728C84.0091 9.13888 84.5225 8.56504 85.2 8.18408C85.8776 7.80312 86.7205 7.61266 87.7323 7.61266C88.3764 7.61266 88.9317 7.71126 89.3913 7.90846C89.851 8.10565 90.2333 8.38992 90.5379 8.76379C90.8424 9.13529 91.076 9.59263 91.2399 10.1342C91.4038 10.678 91.487 11.3071 91.487 12.0209V13.5473H85.8892V14.1538C85.8892 15.1494 86.0116 15.8745 86.2586 16.3329C86.5033 16.7912 86.9526 17.0203 87.6037 17.0203C88.0678 17.0203 88.4232 16.8557 88.663 16.5265C88.9029 16.195 89.0229 15.7108 89.0229 15.0735V14.4294H91.4777V14.9746C91.4777 16.1902 91.1137 17.1499 90.3836 17.8495C89.6535 18.5515 88.6866 18.9746 87.4848 18.9746C86.2971 18.9746 85.3842 18.6895 84.7476 18.1937C84.0444 17.9323 83.6857 17.3885 83.6857 17.3885ZM88.1636 12.0392V11.2186C88.1636 10.2872 88.0582 9.60394 87.8508 9.17088C87.6434 8.73782 87.2929 8.52011 86.7996 8.52011C86.3188 8.52011 85.98 8.73782 85.7797 9.17088C85.5794 9.60394 85.48 10.2872 85.48 11.2186V12.0392H88.1636Z" fill="white"/>
              </g>
            </svg>
            <span className="yt-logo-country">CO</span>
          </a>
        </div>

        {/* Center: Search */}
        <div className="yt-header-center">
          <div className="yt-search-form">
            <input type="text" className="yt-search-input" placeholder="Buscar" aria-label="Buscar" />
            <button className="yt-search-btn" aria-label="Buscar">
              <svg viewBox="0 0 24 24">
                <path d="M20.87,20.17l-5.59-5.59C16.35,13.35,17,11.75,17,10c0-3.87-3.13-7-7-7s-7,3.13-7,7s3.13,7,7,7 c1.75,0,3.35-0.65,4.58-1.71l5.59,5.59L20.87,20.17z M5,10c0-2.76,2.24-5,5-5s5,2.24,5,5s-2.24,5-5,5S5,12.76,5,10z"/>
              </svg>
            </button>
          </div>
          <button className="yt-voice-btn" aria-label="Buscar con la voz">
            <svg viewBox="0 0 24 24">
              <path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"/>
            </svg>
          </button>
        </div>

        {/* Right: Create, Notifications, Avatar */}
        <div className="yt-header-right">
          <button className="yt-create-btn" aria-label="Crear">
            <svg viewBox="0 0 24 24">
              <path d="M14,13h-3v3H9v-3H6v-2h3V8h2v3h3V13z M17,6H3v12h14v-6.39l4,1.83V8.56l-4,1.83V6 M18,5v3.83L22,7v10l-4-1.83V19H2V5H18L18,5z"/>
            </svg>
            <span>Crear</span>
          </button>
          <button className="yt-icon-btn" aria-label="Notificaciones">
            <svg viewBox="0 0 24 24">
              <path d="M10 20h4c0 1.1-.9 2-2 2s-2-.9-2-2zm10-2.65V11c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C9.63 5.36 8 7.92 8 11v6.35l-2 2.15V21h16v-1.5l-2-2.15z"/>
            </svg>
          </button>
          <button className="yt-avatar-btn" aria-label="Cuenta">L</button>
        </div>
      </header>

      {/* ===== CATEGORY CHIPS ===== */}
      <nav className="yt-chips-bar">
        <button className="yt-chip active">Todo</button>
        <button className="yt-chip">{"Música"}</button>
        <button className="yt-chip">Mixes</button>
        <button className="yt-chip">{"Pódcasts"}</button>
        <button className="yt-chip">TED</button>
        <button className="yt-chip">En directo</button>
        <button className="yt-chip">The Lumineers</button>
        <button className="yt-chip">{"Rock en español"}</button>
        <button className="yt-chip">Salsa</button>
        <button className="yt-chip">{"Álbumes"}</button>
        <button className="yt-chip">Pop indie</button>
        <button className="yt-chip">{"Componentes electrónicos"}</button>
        <div className="yt-chips-arrow">
          <button className="yt-chips-arrow-btn" aria-label="Siguiente">
            <svg viewBox="0 0 24 24" fill="white">
              <path d="M9.4 18.4l-.7-.7 5.6-5.6-5.7-5.7.7-.7 6.4 6.4-6.3 6.3z"/>
            </svg>
          </button>
        </div>
      </nav>

      {/* ===== SIDEBAR ===== */}
      <aside className="yt-sidebar">
        {/* Main Nav */}
        <div className="yt-sidebar-item active">
          <svg viewBox="0 0 24 24" fill="white">
            <path d="M4 21V10.08l8-6.96 8 6.96V21h-6v-6h-4v6H4z"/>
          </svg>
          <span>Inicio</span>
        </div>
        <div className="yt-sidebar-item">
          <svg viewBox="0 0 24 24" fill="white">
            <path d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33c-.77-.32-1.2-.5-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86l-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"/>
          </svg>
          <span>Shorts</span>
        </div>

        <div className="yt-sidebar-divider"></div>

        {/* Suscripciones */}
        <div className="yt-sidebar-section-title">
          <span>Suscripciones</span>
          <svg viewBox="0 0 24 24" fill="white">
            <path d="M9.4 18.4l-.7-.7 5.6-5.6-5.7-5.7.7-.7 6.4 6.4-6.3 6.3z"/>
          </svg>
        </div>

        {/* TEDx Talks */}
        <div className="yt-sub-item">
          <div className="yt-sub-avatar-placeholder" style={{ backgroundColor: "#000" }}>
            <img src="https://yt3.googleusercontent.com/ytc/AIdro_kK1GkZjkJhjcq_0AKUpHTY0TjdDOj_IA0TOqSG6LSrdEw=s68-c-k-c0x00ffffff-no-rj" alt="TEDx" width="24" height="24" style={{ borderRadius: "50%", objectFit: "cover" }} />
          </div>
          <span className="yt-sub-name">TEDx Talks</span>
          <svg className="yt-sub-live-icon" viewBox="0 0 24 24" fill="#aaa">
            <path d="M6 8l1.5 1.5L6 11v-3m12-1.5c-.28 0-.5.22-.5.5v6c0 .28.22.5.5.5h2c.28 0 .5-.22.5-.5V8c0-.28-.22-.5-.5-.5h-2zM3.5 8c-.28 0-.5.22-.5.5v6c0 .28.22.5.5.5h2c.28 0 .5-.22.5-.5V8c0-.28-.22-.5-.5-.5h-2z"/>
          </svg>
        </div>

        {/* FRANCE 24 */}
        <div className="yt-sub-item">
          <div className="yt-sub-avatar-placeholder" style={{ backgroundColor: "#1a47b8" }}>
            <img src="https://yt3.googleusercontent.com/ytc/AIdro_mE0USz2OYTOC3MVBRMxETqhWMD_2_CXSA2Jv4mYP2zcg=s68-c-k-c0x00ffffff-no-rj" alt="FRANCE 24" width="24" height="24" style={{ borderRadius: "50%", objectFit: "cover" }} />
          </div>
          <span className="yt-sub-name">{"FRANCE 24 Espa..."}</span>
          <svg className="yt-sub-live-icon" viewBox="0 0 24 24" fill="#c00">
            <circle cx="12" cy="12" r="6" fill="#c00" opacity="0.3"/>
            <circle cx="12" cy="12" r="3" fill="#c00"/>
            <path d="M6.34 17.66A8 8 0 1 0 4 12c0 2.12.83 4.16 2.34 5.66zm1.41-1.41A6 6 0 1 1 18 12a6 6 0 0 1-10.25 4.25z" fill="none"/>
          </svg>
        </div>

        {/* DW Documental */}
        <div className="yt-sub-item">
          <div className="yt-sub-avatar-placeholder" style={{ backgroundColor: "#000" }}>
            <img src="https://yt3.googleusercontent.com/ytc/AIdro_lyLk0cPO2VxaaxOdEQgTPb4MbWQOFPOgKNRe5v_v47X-k=s68-c-k-c0x00ffffff-no-rj" alt="DW" width="24" height="24" style={{ borderRadius: "50%", objectFit: "cover" }} />
          </div>
          <span className="yt-sub-name">DW Documental</span>
          <span className="yt-sub-dot"></span>
        </div>

        {/* Farid Dieck */}
        <div className="yt-sub-item">
          <div className="yt-sub-avatar-placeholder" style={{ backgroundColor: "#333" }}>
            <img src="https://yt3.googleusercontent.com/dH5SSHA6e-3MIlRBRE1BPOQWN2FK7TRwOVz6CdJwQEhdw46PQvtDFjVxKhUWC2HfL3rqPA0o=s68-c-k-c0x00ffffff-no-rj" alt="Farid" width="24" height="24" style={{ borderRadius: "50%", objectFit: "cover" }} />
          </div>
          <span className="yt-sub-name">Farid Dieck</span>
          <span className="yt-sub-dot"></span>
        </div>

        {/* Ibai */}
        <div className="yt-sub-item">
          <div className="yt-sub-avatar-placeholder" style={{ backgroundColor: "#333" }}>
            <img src="https://yt3.googleusercontent.com/ytc/AIdro_n5H6A42xuvOVtVb2uRobqT0UBDxV-mW4mBY_B6oQ0lPu4=s68-c-k-c0x00ffffff-no-rj" alt="Ibai" width="24" height="24" style={{ borderRadius: "50%", objectFit: "cover" }} />
          </div>
          <span className="yt-sub-name">Ibai</span>
          <span className="yt-sub-dot"></span>
        </div>

        {/* Walter Riso */}
        <div className="yt-sub-item">
          <div className="yt-sub-avatar-placeholder" style={{ backgroundColor: "#333" }}>
            <img src="https://yt3.googleusercontent.com/ytc/AIdro_k85K6v-FrBb0YxBGiHiSNv7p-1X8v9DXdMfaXKHxF9hYw=s68-c-k-c0x00ffffff-no-rj" alt="Walter" width="24" height="24" style={{ borderRadius: "50%", objectFit: "cover" }} />
          </div>
          <span className="yt-sub-name">Walter Riso</span>
          <span className="yt-sub-dot"></span>
        </div>

        {/* Veritasium en español */}
        <div className="yt-sub-item">
          <div className="yt-sub-avatar-placeholder" style={{ backgroundColor: "#1a5a1a" }}>
            <img src="https://yt3.googleusercontent.com/ytc/AIdro_kzMvFdFx8U-BrJv3PLY4nxz6lkm0dxiG8hTkQJ5GtS1g=s68-c-k-c0x00ffffff-no-rj" alt="Veritasium" width="24" height="24" style={{ borderRadius: "50%", objectFit: "cover" }} />
          </div>
          <span className="yt-sub-name">{"Veritasium en es..."}</span>
          <span className="yt-sub-dot"></span>
        </div>

        {/* Mostrar más */}
        <div className="yt-sidebar-item">
          <svg viewBox="0 0 24 24" fill="white">
            <path d="M12 15.7L5.6 9.4l.7-.7 5.6 5.6 5.7-5.7.7.7-6.3 6.4z"/>
          </svg>
          <span>{"Mostrar más"}</span>
        </div>

        <div className="yt-sidebar-divider"></div>

        {/* Tú section */}
        <div className="yt-sidebar-section-title">
          <span>{"Tú"}</span>
          <svg viewBox="0 0 24 24" fill="white">
            <path d="M9.4 18.4l-.7-.7 5.6-5.6-5.7-5.7.7-.7 6.4 6.4-6.3 6.3z"/>
          </svg>
        </div>

        <div className="yt-sidebar-item">
          <svg viewBox="0 0 24 24" fill="white">
            <path d="M14.97 16.95L10 13.87V7h2v5.76l4.03 2.49-1.06 1.7zM22 12c0 5.51-4.49 10-10 10S2 17.51 2 12h1c0 4.96 4.04 9 9 9s9-4.04 9-9-4.04-9-9-9C8.81 3 5.92 4.64 4.28 7.38c-.11.18-.22.37-.31.56L3.94 8H8v1H2.5V3.5h1V7l.13-.23c.15-.27.32-.53.5-.78C5.97 3.63 8.82 2 12 2c5.51 0 10 4.49 10 10z"/>
          </svg>
          <span>Historial</span>
        </div>

        <div className="yt-sidebar-item">
          <svg viewBox="0 0 24 24" fill="white">
            <path d="M22 7H2v1h20V7zm-9 5H2v-1h11v1zm0 4H2v-1h11v1zm2 3v-8l7 4-7 4z"/>
          </svg>
          <span>{"Listas de reproducc..."}</span>
        </div>

        <div className="yt-sidebar-item">
          <svg viewBox="0 0 24 24" fill="white">
            <path d="M14.97 16.95L10 13.87V7h2v5.76l4.03 2.49-1.06 1.7zM12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm0 19c-4.96 0-9-4.04-9-9s4.04-9 9-9 9 4.04 9 9-4.04 9-9 9z"/>
          </svg>
          <span>{"Ver más tarde"}</span>
        </div>
      </aside>

      {/* ===== MAIN CONTENT ===== */}
      <main className="yt-main">
        <div className="yt-video-grid">

          {/* ===== VIDEO 1: The Lumineers - Mix ===== */}
          <article className="yt-video-card">
            <div className="yt-thumbnail-container">
              <img
                src="https://img.youtube.com/vi/v4pi1LxuDHc/hqdefault.jpg"
                alt="Mix: The Lumineers - Sleep On The Floor (Official Video)"
                crossOrigin="anonymous"
              />
              <div className="yt-mix-badge">
                <svg viewBox="0 0 24 24">
                  <path d="M22 7H2v1h20V7zm-9 5H2v-1h11v1zm0 4H2v-1h11v1zm2 3v-8l7 4-7 4z"/>
                </svg>
                <span>Mix</span>
              </div>
            </div>
            <div className="yt-video-info">
              <div className="yt-channel-avatar">
                <img
                  src="https://yt3.googleusercontent.com/ytc/AIdro_nz0xUp3AhV8GY19VhGj3LzqEoivzAkOPNmpjsP-f3KPQ=s68-c-k-c0x00ffffff-no-rj"
                  alt="Vevo"
                  crossOrigin="anonymous"
                />
              </div>
              <div className="yt-video-details">
                <div className="yt-card-top-row">
                  <h3 className="yt-video-title">Mix: The Lumineers - Sleep On The Floor (Official Video)</h3>
                  <button className="yt-more-btn" aria-label="Más opciones">
                    <svg viewBox="0 0 24 24"><path d="M12 16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM10.5 12c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5zm0-6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5z"/></svg>
                  </button>
                </div>
                <p className="yt-video-subtitle">The Lumineers, Edward Sharpe and the Magnetic Zeros, Pass...</p>
              </div>
            </div>
          </article>

          {/* ===== VIDEO 2: El mundo de los Amish ===== */}
          <article className="yt-video-card">
            <div className="yt-thumbnail-container">
              <img
                src="https://img.youtube.com/vi/eU2AReNl03E/hqdefault.jpg"
                alt="El mundo de los Amish - Tradición y tentación | DW Documental"
                crossOrigin="anonymous"
              />
              <span className="yt-duration-badge">42:26</span>
            </div>
            <div className="yt-video-info">
              <div className="yt-channel-avatar">
                <img
                  src="https://yt3.googleusercontent.com/ytc/AIdro_lyLk0cPO2VxaaxOdEQgTPb4MbWQOFPOgKNRe5v_v47X-k=s68-c-k-c0x00ffffff-no-rj"
                  alt="DW Documental"
                  crossOrigin="anonymous"
                />
              </div>
              <div className="yt-video-details">
                <div className="yt-card-top-row">
                  <h3 className="yt-video-title">{"El mundo de los Amish - Tradición y tentación | DW Documental"}</h3>
                  <button className="yt-more-btn" aria-label="Más opciones">
                    <svg viewBox="0 0 24 24"><path d="M12 16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM10.5 12c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5zm0-6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5z"/></svg>
                  </button>
                </div>
                <div className="yt-channel-name">
                  <span>DW Documental</span>
                  <span className="yt-verified-badge">
                    <svg viewBox="0 0 24 24"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zM9.8 17.3l-4.2-4.1L7 11.8l2.8 2.7L17 7.4l1.4 1.4-8.6 8.5z"/></svg>
                  </span>
                </div>
                <p className="yt-video-meta">{"965 K visualizaciones · hace 2 semanas"}</p>
              </div>
            </div>
          </article>

          {/* ===== VIDEO 3: Veritasium ===== */}
          <article className="yt-video-card">
            <div className="yt-thumbnail-container">
              <img
                src="https://img.youtube.com/vi/x3G_-Jbb4Sw/hqdefault.jpg"
                alt="¿Cuál Es El Secreto Para Una Vida Plena?"
                crossOrigin="anonymous"
              />
              <span className="yt-duration-badge">21:49</span>
            </div>
            <div className="yt-video-info">
              <div className="yt-channel-avatar">
                <img
                  src="https://yt3.googleusercontent.com/ytc/AIdro_kzMvFdFx8U-BrJv3PLY4nxz6lkm0dxiG8hTkQJ5GtS1g=s68-c-k-c0x00ffffff-no-rj"
                  alt="Veritasium en español"
                  crossOrigin="anonymous"
                />
              </div>
              <div className="yt-video-details">
                <div className="yt-card-top-row">
                  <h3 className="yt-video-title">{"¿Cuál Es El Secreto Para Una Vida Plena?"}</h3>
                  <button className="yt-more-btn" aria-label="Más opciones">
                    <svg viewBox="0 0 24 24"><path d="M12 16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM10.5 12c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5zm0-6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5z"/></svg>
                  </button>
                </div>
                <div className="yt-channel-name">
                  <span>{"Veritasium en español"}</span>
                  <span className="yt-verified-badge">
                    <svg viewBox="0 0 24 24"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zM9.8 17.3l-4.2-4.1L7 11.8l2.8 2.7L17 7.4l1.4 1.4-8.6 8.5z"/></svg>
                  </span>
                </div>
                <p className="yt-video-meta">{"1,1 M de visualizaciones · hace 2 años"}</p>
              </div>
            </div>
          </article>

          {/* ===== VIDEO 4: Bastardos Sin Gloria ===== */}
          <article className="yt-video-card">
            <div className="yt-thumbnail-container">
              <img
                src="https://img.youtube.com/vi/DzyKH2DLCro/hqdefault.jpg"
                alt="La NECESIDAD de un FINAL FELIZ | Bastardos Sin Gloria | Relato y Reflexiones"
                crossOrigin="anonymous"
              />
              <span className="yt-duration-badge">24:16</span>
            </div>
            <div className="yt-video-info">
              <div className="yt-channel-avatar">
                <img
                  src="https://yt3.googleusercontent.com/dH5SSHA6e-3MIlRBRE1BPOQWN2FK7TRwOVz6CdJwQEhdw46PQvtDFjVxKhUWC2HfL3rqPA0o=s68-c-k-c0x00ffffff-no-rj"
                  alt="Farid Dieck"
                  crossOrigin="anonymous"
                />
              </div>
              <div className="yt-video-details">
                <div className="yt-card-top-row">
                  <h3 className="yt-video-title">{"La NECESIDAD de un FINAL FELIZ | Bastardos Sin Gloria | Relato y Reflexiones"}</h3>
                  <button className="yt-more-btn" aria-label="Más opciones">
                    <svg viewBox="0 0 24 24"><path d="M12 16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM10.5 12c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5zm0-6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5z"/></svg>
                  </button>
                </div>
                <div className="yt-channel-name">
                  <span>Farid Dieck</span>
                </div>
                <p className="yt-video-meta">{"8,6 M de visualizaciones · hace 2 años"}</p>
              </div>
            </div>
          </article>

          {/* ===== VIDEO 5: Eddie Santiago ===== */}
          <article className="yt-video-card">
            <div className="yt-thumbnail-container">
              <img
                src="https://img.youtube.com/vi/ETEAqw42z_o/hqdefault.jpg"
                alt="Eddie Santiago - Secretos (Visualizer)"
                crossOrigin="anonymous"
              />
              <span className="yt-duration-badge">4:19</span>
            </div>
            <div className="yt-video-info">
              <div className="yt-channel-avatar">
                <img
                  src="https://yt3.googleusercontent.com/0oJrRfMEDtfT0gfYL4OP6N0VIXrFY3vQJbfxefh1VN6-0dJhvixOjyFWH-g6lBh68rwZNSQ1hVE=s68-c-k-c0x00ffffff-no-rj"
                  alt="Eddie Santiago"
                  crossOrigin="anonymous"
                />
              </div>
              <div className="yt-video-details">
                <div className="yt-card-top-row">
                  <h3 className="yt-video-title">Eddie Santiago - Secretos (Visualizer)</h3>
                  <button className="yt-more-btn" aria-label="Más opciones">
                    <svg viewBox="0 0 24 24"><path d="M12 16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM10.5 12c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5zm0-6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5z"/></svg>
                  </button>
                </div>
                <div className="yt-channel-name">
                  <span>Eddie Santiago</span>
                  <span className="yt-verified-badge">
                    <svg viewBox="0 0 24 24"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zM9.8 17.3l-4.2-4.1L7 11.8l2.8 2.7L17 7.4l1.4 1.4-8.6 8.5z"/></svg>
                  </span>
                </div>
                <p className="yt-video-meta">{"2,8 K visualizaciones · hace 2 semanas"}</p>
              </div>
            </div>
          </article>

          {/* ===== VIDEO 6: Esos Ojitos Negros - Mix ===== */}
          <article className="yt-video-card">
            <div className="yt-thumbnail-container">
              <img
                src="https://img.youtube.com/vi/upr8txNmUtw/hqdefault.jpg"
                alt="Mix: Esos Ojitos Negros El Gran Combo De Puerto Rico Letra"
                crossOrigin="anonymous"
              />
              <div className="yt-mix-badge">
                <svg viewBox="0 0 24 24">
                  <path d="M22 7H2v1h20V7zm-9 5H2v-1h11v1zm0 4H2v-1h11v1zm2 3v-8l7 4-7 4z"/>
                </svg>
                <span>Mix</span>
              </div>
            </div>
            <div className="yt-video-info">
              <div className="yt-channel-avatar">
                <img
                  src="https://yt3.googleusercontent.com/ytc/AIdro_kHqj1KmEROWmnc6h8K9nRekf9WtXcPEsLFMXH5uVoQ0w=s68-c-k-c0x00ffffff-no-rj"
                  alt="Domo Urbano Lirycs"
                  crossOrigin="anonymous"
                />
              </div>
              <div className="yt-video-details">
                <div className="yt-card-top-row">
                  <h3 className="yt-video-title">Mix: Esos Ojitos Negros El Gran Combo De Puerto Rico Letra</h3>
                  <button className="yt-more-btn" aria-label="Más opciones">
                    <svg viewBox="0 0 24 24"><path d="M12 16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM10.5 12c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5zm0-6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5z"/></svg>
                  </button>
                </div>
                <p className="yt-video-subtitle">{"El Gran Combo de Puerto Rico, Eddie Santiago, Frankie Ruiz..."}</p>
              </div>
            </div>
          </article>

        </div>
      </main>
    </>
  )
}
