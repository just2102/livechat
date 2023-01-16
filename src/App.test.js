import { render, screen } from '@testing-library/react';
import App from './App';

test('app renders without crash', ()=> {
  let div = document.createElement('div');
  div.setAttribute('id','root');
  document.body.appendChild(div)
  render(<App/>, div)
})
