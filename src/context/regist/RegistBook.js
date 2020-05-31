import React, { useState, useContext } from 'react';
import './RegistBook.css';

import { BookShelfContext } from '../../App'

// 
// Material-UIに置き換わったため、現在は未使用
// 使う場合はApp.jsを修正
// <BookShelfContext.Provider value={resource}>
// <RegistBook />
// </BookShelfContext.Provider>
// 

const RegistBook = (props) => {
    // 登録要素(タイトル、説明)
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    // 親コンポーネントから更新用のハンドラと更新元情報を取得
    const bookshelf = useContext(BookShelfContext);

    // 登録イベント
    const registItem = (e) => {
        e.preventDefault();
        // console.log('title:' + title + ' description:' + description);

        // オブジェクト配列の場合、新しく作り直して登録しなおす
        var newbooklist = bookshelf.data.concat({ title, description });
        console.log('booklist[after ]:' + JSON.stringify(newbooklist));
        bookshelf.handler(newbooklist);
        return;
    }

    return (
        <form className="RegistBook-form" onSubmit={registItem} >
            <div>
                <input id="title" placeholder="title" value={title} onChange={(e) => { setTitle(e.target.value) }} />
                <textarea id="description" placeholder="description" value={description} onChange={(e) => { setDescription(e.target.value) }} />
            </div>
            <div>
                <button type="submit" >登録</button>
            </div>
        </form>);
}

export default RegistBook;