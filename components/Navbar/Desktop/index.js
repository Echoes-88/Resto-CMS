
import styles from '../Navbar.module.css';

export default function DesktopNavbar({setMobMenu}) {


  return (
    <nav className={styles.navbarMainContainer}>
    <div className={styles.navbarContainer}>
      <div className={styles.underContainer}>
        <div className={styles.mobileButtonContainer}>
  
          <button onClick={() => setMobMenu(true)} type="button" aria-controls="mobile-menu" aria-expanded="false">
  
            {/* <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg> */}

          </button>
        </div>
        <div className={styles.otherContainer}>
          <div className={styles.logo}>
            <img className="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow" />
            <img className="hidden lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg" alt="Workflow" />
          </div>
  
            <div className={styles.menu}>
              <div className="flex justify-content-center align-items-center fullHeight">
                <a href="#" className={`${styles.menuElt} ${styles.current}`}>Home</a>
                <a href="#" className={styles.menuElt}>Menu</a>
                <a href="#" className={styles.menuElt}>Order online</a>
                <a href="#" className={styles.menuElt}>Contact</a>
              </div>
            </div>
  
        </div>
      </div>
    </div>
    </nav>
  );

}