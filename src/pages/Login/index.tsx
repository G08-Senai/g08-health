import "./style.login.css";

import { Link } from "react-router-dom";

import logo from "../../assets/logog08.svg";
import molecula from "../../assets/elementomolecula.svg";

export default function Login() {
  return (
    <>
      <div id="login">
        <div id="background">
          <img src={molecula} alt="" />
          <img src={molecula} alt="" />
          <img src={molecula} alt="" />
          <img src={molecula} alt="" />
        </div>

        <div id="imglogindiv">
          <img id="imglogin" src={logo} alt="" />
        </div>

        <form id="formlogin">
          <div id="userdiv">
            <label>Usuario</label>
            <input type="string" />
          </div>

          <div id="passdiv">
            <label>Senha</label>
            <input type="password" />
          </div>

          <div id="buttondiv">
            <button id="buttonlogin">Confirmar</button>
          </div>
        </form>
      </div>
    </>
  );
}
