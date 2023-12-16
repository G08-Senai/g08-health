import "./style.home.css";
import molecula from "../../assets/elementomolecula.svg";
import robozin from "../../assets/robozin.svg";

export default function Home() {
  return (
    <>
      <div id="home">
        <div id="backgroundhome">
          <img src={molecula} alt="" />
          <img src={molecula} alt="" />
          <img src={molecula} alt="" />
          <img src={molecula} alt="" />
        </div>

        <header id="headerana">
          <img src={robozin} alt="" />
          <h1>Olá Ana</h1>
          <h2>Seja bem-vinda! </h2>
        </header>
      </div>
    </>
  );
}
