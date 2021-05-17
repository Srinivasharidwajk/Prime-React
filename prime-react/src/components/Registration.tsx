import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    TextField,
    Grid,
    Card,
    CardContent,
    Typography,
    CardHeader,
    FormControlLabel,
    Checkbox, Button
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    grid : {
        margin : '0.5rem'
    },
    button : {
        margin : '0.5rem'
    },
    card : {
        backgroundColor : '#ffeeba'
    },
    formControl : {
        minWidth : 280
    },
    cardHeader : {
        backgroundColor : 'teal',
        color : 'white'
    }
}));

interface IProps {}
interface IState {
    username : string;
    email : string;
    password : string;
}

let Registration:React.FC<IProps> = ({}) => {
    let [state , setState] = useState<IState>({
        username : '',
        email : '',
        password : ''
    });

    let [terms , setTerms] = useState(false);

    let updateForm = (event : React.ChangeEvent<HTMLInputElement>) => {
        setState({
            ...state,
            [event.target.name] : event.target.value
        })
    };

    const classes = useStyles();
    return(
        <React.Fragment>
            <pre>{JSON.stringify({state , terms})}</pre>
            <Grid container spacing={1} className={classes.grid}>
                <Grid item xs={3} >
                    <Card>
                        <CardHeader title="Registration" className={classes.cardHeader}/>
                        <CardContent className={classes.card}>
                            <form className={classes.root} noValidate autoComplete="off">
                                <TextField
                                    className={classes.formControl}
                                    value={state.username}
                                    name="username"
                                    onChange={updateForm}
                                    label="Username"
                                    variant="outlined"
                                    color="primary"
                                />
                                <TextField
                                    className={classes.formControl}
                                    value={state.email}
                                    name="email"
                                    onChange={updateForm}
                                    label="Email"
                                    variant="outlined"
                                    color="primary"
                                />
                                <TextField
                                    className={classes.formControl}
                                    value={state.password}
                                    name="password"
                                    onChange={updateForm}
                                    label="Password"
                                    variant="outlined"
                                    color="primary"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox color="primary" value={terms} onChange={e => setTerms(e.target.checked)}  name="checkedA" />
                                    }
                                    label="Accept Terms"
                                /><br/>
                                <Button variant="contained" color="primary">Register</Button>
                            </form>
                            <Typography variant="h6">{state.username}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};
export default Registration;