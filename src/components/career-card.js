import { LitElement, html, css } from 'lit';
import { themes } from '../styles/themes.js';  // ruta relativa a tu proyecto

// Último dígito de tu cédula: 4 → tema “rojo”
const myLastDigit = 4;
let themeName = 'azul';
if (myLastDigit <= 1) themeName = 'azul';
else if (myLastDigit <= 3) themeName = 'verde';
else if (myLastDigit <= 5) themeName = 'rojo';
else if (myLastDigit <= 7) themeName = 'gris';
else themeName = 'naranja';

export class CareerCard extends LitElement {
  static properties = {
    career: { type: Object }
  };

  static styles = [
    themes[themeName],
    css`
      :host {
        display: block;
        border: 2px solid var(--border-color);
        border-radius: 8px;
        overflow: hidden;
        max-width: 400px;
        font-family: Arial, sans-serif;
        margin-top: 16px;
      }
      .header {
        background: var(--header-bg);
        color: white;
        padding: 12px;
      }
      .body {
        padding: 16px;
      }
      .body img {
        max-width: 100%;
        border-radius: 4px;
        margin-bottom: 12px;
      }
      .body h2 {
        margin: 0 0 8px;
        color: var(--accent-color);
      }
      .body p {
        margin: 4px 0;
        line-height: 1.4;
      }
    `
  ];

  constructor() {
    super();
    this.career = {
      name: 'Selecciona una carrera',
      faculty: '',
      description: '',
      image: ''
    };

    // escucha el evento que despacha career-selector
    window.addEventListener('career-selected', (e) => {
      this.career = e.detail;
    });
  }

  render() {
    return html`
      <div class="header">
        <h1>${this.career.name}</h1>
        <small>${this.career.faculty}</small>
      </div>
      <div class="body">
        ${this.career.image ? html`<img src="${this.career.image}" alt="${this.career.name}" />` : ''}
        <p>${this.career.description}</p>
      </div>
    `;
  }
}

customElements.define('career-card', CareerCard);
