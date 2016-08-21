/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';

const title = 'Tap to vibrate';

function Home({ color, time }, context) {
  context.setTitle(title);
  const vibrate = ()=>{
    console.log(time)
    if ((typeof serverRendering) == 'undefined') {
      navigator.vibrate(time)
    }
  }
  return (
    <div className={s.root} onClick={vibrate} style={{background:color}}>

    </div>
  );
}


Home.contextTypes = { setTitle: PropTypes.func.isRequired };

export default withStyles(s)(Home);
