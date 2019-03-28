import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <body>
      <div className="App">
        <img
          class="Foto"
          src="https://media.licdn.com/dms/image/C5103AQEMgeWX--RzGA/profile-displayphoto-shrink_200_200/0?e=1559174400&v=beta&t=bjCbccGkd1u5cA2D76RVDFfDVI3_DuXzUGWuluJ5MmU"
        />
        <div class="textdiv" />
        <h1 class="text">
          <font color="white">Hallo! I am Hanif </font>
        </h1>

        <div class="Contact">
          <h2> I am Junior Web Develover </h2>
          <h3> You can Contact Me At</h3>
          <p>
            {" "}
            Facebook : <a href="#">Klik Disini!</a>
          </p>
          <p>
            {" "}
            Instagram : <a href="#">Klik Disini!</a>
          </p>
          <p>
            {" "}
            LinkedIn : <a href="#">Klik Disini!</a>
          </p>
        </div>
      </div>
    </body>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
