//Crie um component de class

// Crie uma arrow function que receba uma mensagem e
// exiba na tela

// Crie uma arrow function que retorne o dobro de
// um número e exiba na tela

import React, { Component } from "react";
export default class Nome extends Component {
  Oi = () => {
    return (
      <div>
        <p>Trabalhando com Arrow Function</p>
      </div>
    );
  };

  Multi = () => 5 * 2;

  render() {
    return (
      <div>
        {this.Oi()}
        {this.Multi()}
      </div>
    );
  }
}
