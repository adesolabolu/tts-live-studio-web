import { renderToString } from 'react-dom/server';
import { App } from './App';

export function render(route: '/' | '/privacy' | '/terms' = '/') {
  return renderToString(<App initialRoute={route} />);
}
