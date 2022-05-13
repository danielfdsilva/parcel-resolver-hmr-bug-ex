import React from 'react';
import { data } from 'custom/module';

// Root component.
export default function App() {
  return (
    <div>
      <h1>custom/module</h1>
      <p>{data}</p>
    </div>
  );
}
