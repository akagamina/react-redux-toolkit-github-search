import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
        backgroundColor: "#fff",
        marginTop: 8,
        marginBottom: 16,
        borderRadius: 8,
        padding: 4
    },
}));

export default function TheInput(props: any) {
    const classes = useStyles();

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField inputProps={{ "data-testid": "content-input" }}
                    data-testid="the-input" label="Search repo" variant="outlined" onChange={props.handleChange} />
            </form>
        </div>
    );
}