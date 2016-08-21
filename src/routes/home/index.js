/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Home from './Home';

const melodies = [{color:'green', time:[100,250,400,180,400,200,200,190]},
  {color:'blue', time:[500,110,500,110,450,110,200,110,170,40,450,110,200,110,170,40,500]},
  {color:'orange', time:[200,100,200,275,425,100,200,100,200,275,425,100,75,25,75,125,75,25,75,125,100,100]},
  {color:'yellow', time:[125,75,125,275,200,275,125,75,125,275,200,600,200,600]}]
export default {

  path: '*',

  async action() {
    return <div>
      {melodies.map(x=>(
        <Home color={x.color} time={x.time} />
      ))}
    </div>;
  },

};
