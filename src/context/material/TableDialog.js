import React, { useState, useContext } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

// ユーザ定義コンポーネント
import { BookShelfContext } from '../../App'
import TableContent from './TableContent'


// テーブル表示ダイアログ
export default function TableDialog() {
    // ダイアログ表示状態
    const [tableDialogView, setTableDialogView] = useState(false);

    // レコード削除位置
    const [deleteIdx, setDeleteIdx] = useState(-1);

    // 親コンポーネントから更新用のハンドラと更新元情報を取得
    const bookshelf = useContext(BookShelfContext);

    // 登録ボタン押下イベント
    const handleRetistButton = () => {
        setTableDialogView(true);
    };

    // ダイアログ終了イベント
    const handleClose = () => {
        setTableDialogView(false);
    };

    // 削除イベント
    const handleDelete = () => {
        setTableDialogView(false);

        // 選択した要素を削除する。
        console.log('deleteIdx:' + deleteIdx);
        if (deleteIdx >= 0) {
            // オブジェクト配列の場合、新しく作り直して登録しなおす
            bookshelf.data.splice(deleteIdx, 1);
            var newbooklist = JSON.parse(JSON.stringify( bookshelf.data));
            console.log('booklist[after ]:' + JSON.stringify(newbooklist));
            // 親コンポーネントのSetterメソッド(メソッド名handlerとして定義)経由で更新
            bookshelf.handler(newbooklist);

            // 画面のリフレッシュ
        }
    };

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleRetistButton}>書籍情報削除</Button>
            <Dialog
                open={tableDialogView}
                onClose={handleClose}
                aria-labelledby="form-dialog-title">

                <DialogTitle id="form-dialog-title">コンテンツ削除</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        削除したい項目を選択後、削除ボタンを押下してください。
                    </DialogContentText>
                    <TableContent />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">キャンセル</Button>
                    <Button onClick={handleDelete} color="primary">削除</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
