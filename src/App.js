import React, { useState, createContext } from 'react';
import './App.css';
import Book from './context/bookshelf/Book'
import Header from './context/layout/Header'
import FormDialogSample from './context/material/FormDialogSample'
import TableDialog from './context/material/TableDialog'

export const BookShelfContext = createContext('');

// Top画面
// 登録された書籍をリスト表示
// 登録ボタン(登録ダイアログ表示)
// 削除ボタン(削除ダイアログ表示)
export default () => {

  // 書籍リストの初期状態
  const [booklist, setBooklist]
    = useState([
      { 'title': '沈まぬ太陽', 'description': 'Toyoko Yamazaki', 'rating': 3.5 },
      { 'title': '殺戮に至る病', 'description': '我孫子武丸', 'rating': 1.5 },
      { 'title': '異邦の騎士', 'description': '島田荘司', 'rating': 4.0 }
    ]);

  // 書籍リストの状態オブジェクト（子コンポーネントへの受け渡し用）
  function getResource() {
    return { data: booklist, handler: setBooklist }
  };
  const resource = getResource();

  // 描画内容
  const renderParam = (
    <div className="App my-grid">
      <Header className='my-grid-item' />
      <aside className='my-grid-item'>
        <BookShelfContext.Provider value={resource}>
          <FormDialogSample />
          <TableDialog />
        </BookShelfContext.Provider>
      </aside>
      <main className='my-grid-item'>
        {booklist.map((items, idx) => (
          <Book key={idx}
            title={items.title}
            description={items.description}
            rating={items.rating}
          />
        ))}
      </main>
      <footer className='my-grid-item'>Writtened by C.H@2020</footer>
    </div>
  );

  return renderParam;
}
