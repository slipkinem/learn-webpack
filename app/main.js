/**
 * Created by slipkinem on 2016/11/25.
 */
'use strict';
import React from 'react';
import Greeter from './greeter';
import {render} from 'react-dom';

import './main.css';

render(<Greeter/>,document.getElementById('div'));
// document.getElementById('div').appendChild(greeter());