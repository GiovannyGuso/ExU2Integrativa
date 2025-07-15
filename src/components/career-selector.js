import { LitElement, html, css } from 'lit';

export class CareerSelector extends LitElement {
  static properties = {
    careers: { type: Array },
    open:    { type: Boolean }
  };

  static styles = css`
    :host { display: block; font-family: Arial, sans-serif; }
    button {
      background: #006935;
      color: white;
      border: none;
      padding: 8px 12px;
      cursor: pointer;
      border-radius: 4px;
      font-size: 1rem;
    }
    ul {
      margin: 8px 0 0;
      padding: 0;
      list-style: none;
      border: 1px solid #ccc;
      border-radius: 4px;
      max-width: 300px;
    }
    li {
      padding: 8px;
      cursor: pointer;
    }
    li:hover {
      background-color: #f0f0f0;
    }
  `;

  constructor() {
    super();
    this.careers = [
      {
        name: 'Ingeniería de Software',
        faculty: 'Facultad de Informática',
        description: 'Formación en desarrollo de aplicaciones y metodologías ágiles.',
        image: 'https://via.placeholder.com/300x150?text=Software'
      },
      {
        name: 'Ingeniería Mecatrónica',
        faculty: 'Facultad de Mecánica',
        description: 'Integración de mecánica, electrónica y control.',
        image: 'https://via.placeholder.com/300x150?text=Mecatr%C3%B3nica'
      },
      {
        name: 'Biotecnología',
        faculty: 'Facultad de Ciencias',
        description: 'Aplicaciones biológicas para la industria y la salud.',
        image: 'https://via.placeholder.com/300x150?text=Biotecnolog%C3%ADa'
      },
      {
        name: 'Petroquímica',
        faculty: 'Facultad de Ingeniería Química',
        description: 'Procesos de refinación y transformación de hidrocarburos.',
        image: 'https://via.placeholder.com/300x150?text=Petroqu%C3%ADmica'
      }
    ];
    this.open = false;
  }

  _toggleList() {
    this.open = !this.open;
  }

  _select(career) {
    this.dispatchEvent(new CustomEvent('career-selected', {
      detail: career,
      bubbles: true,
      composed: true
    }));
    this.open = false;
  }

  render() {
    return html`
      <button @click=${this._toggleList}>
        ${this.open ? 'Cerrar carreras ▲' : 'Haz clic para ver detalles ▼'}
      </button>

      ${this.open ? html`
        <ul>
          ${this.careers.map(c => html`
            <li @click=${() => this._select(c)}>${c.name}</li>
          `)}
        </ul>
      ` : ''}
    `;
  }
}

customElements.define('career-selector', CareerSelector);
