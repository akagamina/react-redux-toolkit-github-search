import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/core/styles';

interface TableItem {
    rows: [object],
    columns: ColumnItem[],
    pageSize: number,
    handleModelChange: any,
    isLoading?: boolean;
}
interface ColumnItem {
    field: string,
    headerName: string,
    width: number,
}

const useStyles = makeStyles((theme) => ({
    size: {
        height: 400,
        width: '100%',
    },
    root: {
        backgroundColor: "#fff",
        boxShadow: 'rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px'
    }
}));

export default function TheTable(props: TableItem) {
    const { rows, columns, pageSize, handleModelChange } = props;

    const classes = useStyles();


    return (
        <div className={classes.size}>
            <DataGrid
                className={classes.root}
                rows={rows}
                columns={columns}
                pageSize={pageSize}
                onSortModelChange={handleModelChange}
                sortingOrder={['asc', 'desc']}
                sortingMode="server"
                disableColumnSelector
                disableColumnMenu
            />
        </div>
    );
}