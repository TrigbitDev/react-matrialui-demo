import React from "react";
import "../../style/common.css";

export default function BasicComponent() {
  return (
    <div>
      <p class="center">Every paragraph will be affected by the style.</p>
      <p id="para">Me too!</p>
      <p>And me!</p>
      <h1 class="center">Hello</h1>
      <p id="Address">I live in Duckburg</p>
      <p id="my-Address">I live in Duckburg</p>
      <p title="Hello beautiful">Ciao bella</p>
      <p id="Listfriends">I live in Duckburg</p>
      <p id="pozz">I live in Duckburg</p>
      Username: <input type="text" name="Username"></input>
      <div>
        <form action="">
          <input type="radio" value="male" name="gender" /> Male<br></br>
          <input type="radio" value="female" name="gender" /> Female<br></br>
          <input type="checkbox" value="Bike" /> I have a bike
          <br></br>
          <input type="checkbox" value="Car" /> I have a car
        </form>

        <table>
          <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
            <td>Mexico</td>
          </tr>
          <tr>
            <td>Ernst Handel</td>
            <td>Roland Mendel</td>
            <td>Austria</td>
          </tr>
          <tr>
            <td>Island Trading</td>
            <td>Helen Bennett</td>
            <td>UK</td>
          </tr>
          <tr>
            <td>Laughing Bacchus Winecellars</td>
            <td>Yoshi Tannamuri</td>
            <td>Canada</td>
          </tr>
          <tr>
            <td>Magazzini Alimentari Riuniti</td>
            <td>Giovanni Rovelli</td>
            <td>Italy</td>
          </tr>
        </table>
      </div>
    </div>
  );
}
