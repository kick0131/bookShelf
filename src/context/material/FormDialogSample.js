import React, { useState, useContext } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Rating from '@material-ui/lab/Rating';
import { BookShelfContext } from '../../App'

// 登録ダイアログ
export default function FormDialog() {
    // ダイアログ表示状態
    const [dialogView, setDialogView] = useState(false);

    // 登録要素(タイトル、説明、レーティング)
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [rating, setRating] = useState(1);

    // 親コンポーネントから更新用のハンドラと更新元情報を取得
    const bookshelf = useContext(BookShelfContext);

    // 登録ボタン押下イベント
    const handleRetistButton = () => {
        setDialogView(true);
    };

    // ダイアログ終了イベント
    const handleClose = () => {
        setDialogView(false);
    };

    // 登録イベント
    const handleRegist = () => {
        setDialogView(false);

        // 空要素の登録は認めない
        if (title !== '') {
            // オブジェクト配列の場合、新しく作り直して登録しなおす
            var newbooklist = bookshelf.data.concat({ title, description, rating });
            console.log('booklist[after ]:' + JSON.stringify(newbooklist));
            // 親コンポーネントのSetterメソッド(メソッド名handlerとして定義)経由で更新
            bookshelf.handler(newbooklist);
        }
    };

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleRetistButton}>書籍情報登録</Button>
            <Dialog
                open={dialogView}
                onClose={handleClose}
                aria-labelledby="form-dialog-title">

                <DialogTitle id="form-dialog-title">コンテンツ登録</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        必要事項を記入の上、登録ボタンを押下してください。
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="title"
                        label="タイトル"
                        type="text"
                        fullWidth
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="description"
                        label="説明"
                        type="text"
                        fullWidth
                        onChange={(e) => { setDescription(e.target.value) }}
                    />
                    <Rating
                        name="half-rating"
                        defaultValue={rating}
                        value={rating}
                        onChangeActive={(event, newValue) => {
                            if(newValue >= 0){
                                setRating(newValue);
                            }
                        }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">キャンセル</Button>
                    <Button onClick={handleRegist} color="primary">登録</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}