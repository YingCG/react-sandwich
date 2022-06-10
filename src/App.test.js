import { render, screen } from '@testing-library/react';
import App from './App';
import {SearchBox} from './SearchBox'

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


it('render search value correctly', () => {
  const {queryByTestId, queryByPlaceholderName} = render(<SearchBox/>)

  expect(queryByTestId("search-button")).toBeTruthy()
})