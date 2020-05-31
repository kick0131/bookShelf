import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { BookShelfContext } from '../../App'
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles({
    table: {
        maxHeight: 300,
        minWidth: '1rem',
    },
});

// テーブル表示ダイアログ
export default function TableDialog() {
    // スタイル定義
    const classes = useStyles();

    // ダイアログ表示状態
    const [tableDialogView, setTableDialogView] = useState(false);

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
                    <TableContainer className={classes.table} >
                        <Table stickyHeader size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    <TableCell >タイトル</TableCell>
                                    <TableCell align="right">説明</TableCell>
                                    <TableCell align="right">レーティング&nbsp;(5点満点)</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {bookshelf.data.map((row) => (
                                    <TableRow key={row.name}>
                                        <TableCell >{row.title}</TableCell>
                                        <TableCell align="right">{row.description}</TableCell>
                                        <TableCell align="right"><Rating value={row.rating} precision={0.5} readOnly></Rating></TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">キャンセル</Button>
                    <Button onClick={handleDelete} color="primary">削除</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
