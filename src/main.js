import React from 'react';
import { render } from 'react-dom';

import App from './app';

// Root component.
function Root() {
  return (
    <div>
      <App />
    </div>
  );
}

render(<Root />, document.getElementById('container'));
