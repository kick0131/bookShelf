import React from 'react';
import './Book.css';
import SingleSwitche from '../material/SingleSwitche';
import Rating from '@material-ui/lab/Rating';

// コンテンツ情報（書籍情報）
// - 書籍名（String）
// - 説明（String）
// - レーティング(Float) 表示はMaterial-UIのレーティングモジュールを使用
export default (props) => {
    return (
        <div className="BookItem">
            <div className="BookItem-title">{props.title}<SingleSwitche/></div>
            <div className="BookItem-description">{props.description}</div>
            <Rating name="half-rating" className="BookItem-description" value={props.rating} precision={0.5} readOnly />
        </div>
    );
}
