/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Link from '../../components/Link';
class HomePage extends React.Component {
  render() {
    return (
      <div>
          <Link to="/kid_games/accelerometer">accelerometer</Link>
          <br/>
          <Link to="/kid_games/vibration">vibration</Link>
      </div>
    );
  }

}

export default HomePage;
