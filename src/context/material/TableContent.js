import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Rating from '@material-ui/lab/Rating';
import Checkbox from '@material-ui/core/Checkbox';

import { BookShelfContext } from '../../App'

const useStyles = makeStyles({
    table: {
        maxHeight: 300,
        minWidth: '1rem',
    },
});

// テーブル部分
export default function TableContent() {
    // スタイル定義
    const classes = useStyles();

    // レコード削除位置
    const [deleteIdx, setDeleteIdx] = useState();

    // 親コンポーネントから更新用のハンドラと更新元情報を取得
    const bookshelf = useContext(BookShelfContext);

    // ToDo: 行選択した際の動作
    const rowClicked = (name) => {
        console.log('name:' + name);
        // const index = bookshelf.data.findIndex(data => data.title === name);
        // console.log('name:' + name + ' index:' + index);
        // setDeleteIdx(index);
    }

    return (
        <TableContainer className={classes.table} >
            <Table stickyHeader size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell padding="checkbox">削除</TableCell>
                        <TableCell >タイトル</TableCell>
                        <TableCell align="right">説明</TableCell>
                        <TableCell align="right">レーティング&nbsp;(5点満点)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {bookshelf.data.map((row) => (
                        <TableRow key={row.name} >
                            <TableCell ><Checkbox inputProps={{ 'aria-label': 'normal-checkbox' }} /></TableCell>
                            <TableCell >{row.title}</TableCell>
                            <TableCell align="right">{row.description}</TableCell>
                            <TableCell align="right"><Rating value={row.rating} precision={0.5} readOnly></Rating></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
