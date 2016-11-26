/**
 * Created by slipkinem on 2016/11/25.
 */
'use strict';
import React,{Component} from 'react';
import config from './config.json';
import styles from './Greeter.css';

class Greeter extends Component{
    render(){
        return(
            <div className={styles.div}>
                {config.text}
            </div>
        )
    }
}
export default Greeter;
// module.exports = function () {
//     var greet = document.createElement('div');
//     greet.textContent = config.text;
//     return greet;
// };