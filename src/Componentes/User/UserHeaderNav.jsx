import React from "react";
import { NavLink, Navigate, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../UserContext";
import MinhasFotos from "../../Assets/feed.svg";
import Estatisticas from "../../Assets/estatisticas.svg";
import Adicionar from "../../Assets/adicionar.svg";
import Sair from "../../Assets/sair.svg";
import styles from "./UserHeaderNav.module.css";
import UseMedia from "../../Hooks/UseMedia";

const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext);

  function handleLogout() {
    userLogout();
    navigate = "/login";
  }

  const mobile = UseMedia("(max-width: 40rem)");
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const { pathname } = useLocation();
  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}

      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <NavLink to="/conta" end>
          <img src={MinhasFotos} alt="Icon MinhasFotos" />
          {mobile && "Minhas Fotos"}
        </NavLink>
        <NavLink to="/conta/estatisticas">
          <img src={Estatisticas} alt="Icon Estatisticas" />
          {mobile && "Estatisticas"}
        </NavLink>
        <NavLink to="/conta/postar">
          <img src={Adicionar} alt="Icon Adicionar" />
          {mobile && "Adicionar"}
        </NavLink>
        <button onClick={handleLogout}>
          <img src={Sair} alt="Icon Sair" />
          {mobile && "Sair"}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
