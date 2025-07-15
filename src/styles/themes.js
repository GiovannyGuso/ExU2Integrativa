import { css } from 'lit';

export const themes = {
  azul: css`
    :host {
      --border-color: #0073bb;
      --header-bg:   #0073bb;
      --accent-color:#00a8e1;
    }
  `,
  verde: css`
    :host {
      --border-color: #006935;
      --header-bg:   #006935;
      --accent-color:#82c341;
    }
  `,
  rojo: css`
    :host {
      --border-color: #c45500;
      --header-bg:   #c45500;
      --accent-color:#d14836;
    }
  `,
  gris: css`
    :host {
      --border-color: #424242;
      --header-bg:   #424242;
      --accent-color:#6b6b6b;
    }
  `,
  naranja: css`
    :host {
      --border-color: #ff9900;
      --header-bg:   #ff9900;
      --accent-color:#fea50f;
    }
  `
};
