import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import Title from '@/components/title.jsx';

it('renders a heading', () => {
  render(<Title />);
  expect(screen.getByTestId('title-product')).toHaveTextContent('products');
});
