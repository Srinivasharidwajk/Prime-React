import React from 'react';
import './App.css';
import {Button, makeStyles , AppBar , Toolbar , Typography} from '@material-ui/core';
import Counter from "./components/Counter";
import WishMessage from "./components/WishMessage";
import DigitalWatch from "./components/DigitalWatch";
import ProductItem from "./components/ProductItem";
import ShoppingCart from "./components/ShoppingCart";
import Registration from "./components/Registration";

let useStyles = makeStyles({
    button : {
        margin : '0.5rem'
    }
});

let App = () => {
  let classes = useStyles();
  return (
    <React.Fragment>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6">React Material Ui</Typography>
            </Toolbar>
        </AppBar>


        {/*<Button className={classes.button} variant="contained" color="primary">Hello</Button>
        <Button className={classes.button} variant="contained" color="secondary">Hello</Button>*/}

        {/*<Counter/>*/}
        {/*<WishMessage/>*/}
        {/*<DigitalWatch/>*/}
       {/* <ProductItem/>*/}
      {/* <ShoppingCart/>*/}
      <Registration/>
    </React.Fragment>
  );
}

export default App;
