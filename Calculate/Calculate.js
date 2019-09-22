import React, { Component } from "react";
import { Button } from "react";

export default class Calculate extends Component {
  render() {
    return (
      <div>
        <div className="w3-panel w3-card" id="Card">
          <div className="w3-panel w3-card" id="Card1">
            <input id="Dis" placeholder="" />
            <hr id="b" />
            <buttonGroup>
              <button class="w3-button w3-teal" id="btnc" value="clear">
                AC
              </button>
              <button class="w3-button w3-teal" id="btnad">
                +/-
              </button>
              <button class="w3-button w3-teal" id="btnp">
                %
              </button>
              <button class="w3-button w3-pink" id="btna">
                +
              </button>
              <button class="w3-button w3-grey" id="btn1">
                1
              </button>
              <button class="w3-button w3-grey" id="btn2">
                2
              </button>
              <button class="w3-button w3-grey" id="btn3">
                3
              </button>
              <button class="w3-button w3-pink" id="btns">
                -
              </button>
              <button class="w3-button w3-grey" id="btn4">
                4
              </button>
              <button class="w3-button w3-grey" id="btn5">
                5
              </button>
              <button class="w3-button w3-grey" id="btn5">
                6
              </button>
              <button class="w3-button w3-pink" id="btnm">
                *
              </button>
              <button class="w3-button w3-grey" id="btn6">
                7
              </button>
              <button class="w3-button w3-grey" id="btn7">
                8
              </button>
              <button class="w3-button w3-grey" id="btn8">
                9
              </button>
              <button class="w3-button w3-pink" id="btnd">
                /
              </button>
              <button class="w3-button w3-grey" id="btn0">
                0
              </button>
              <button class="w3-button w3-pink" id="btndot">
                .
              </button>
              <button class="w3-button w3-deep-purple " id="btne">
                =
              </button>
            </buttonGroup>
          </div>
        </div>
      </div>
    );
  }
}
