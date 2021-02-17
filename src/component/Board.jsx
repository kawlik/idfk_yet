import React, { useEffect } from 'react';

import { Player } from './Shapes';

import Game from '../game/Game';

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

const Board = ({ idName }) => {

    useEffect(() => {
        
        const game = new Game('#board');
        game.setUp();

    }, []);

    /*   *   *   *   *   *   *   *   *   *   */
    
    return(
    <section className='board' id={idName}>

        <Player idName='player'/>

    </section>
)};

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

export default Board;