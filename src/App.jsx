import React from 'react';

import Board from './component/Board';
import Menu from './component/Menu';

import './style/main.scss';

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

const App = () => {

    /*   *   *   *   *   *   *   *   *   *   */
    
    return(
    <>

        <Menu/>

        <Board idName={'board'}/>
        
    </>
)};

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

export default App;