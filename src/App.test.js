import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import renderer from 'react-test-renderer';
import RegistBook from './context/regist/RegistBook';
import Header from './context/layout/Header';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Writtened by/i);
  expect(linkElement).toBeInTheDocument();
});

// スナップショットテスト
test('RegistBook SnapShot test', () => {
  const tree = renderer
    .create(<RegistBook />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

// モック動作確認
jest.mock('./context/layout/Header', () => () => 'SomeComponent');
test('Header use mock', () => {
  const tree = renderer
    .create(<Header />);
  expect(tree.toJSON()).toEqual('SomeComponent');
});
