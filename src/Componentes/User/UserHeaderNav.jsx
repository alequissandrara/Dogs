import React from "react";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { UserContext } from "../../UserContext";
import MinhasFotos from "../../Assets/feed.svg";
import Estatisticas from "../../Assets/estatisticas.svg";
import Adicionar from "../../Assets/adicionar.svg";
import Sair from "../../Assets/sair.svg";
import styles from "./UserHeaderNav.module.css";

const UserHeaderNav = () => {
  const [mobile, setMobile] = React.useState(null);
  const { userLogout } = React.useContext(UserContext);

  function handleLogout() {
    userLogout();
    navigate = "/login";
  }

  return (
    <nav className={styles.nav}>
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
  );
};

export default UserHeaderNav;
