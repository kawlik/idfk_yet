import React from 'react';

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

const Player = ({ idName }) => {

    /*   *   *   *   *   *   *   *   *   *   */
    
    return(
    <div className='player' id={idName}><span></span></div>
)};

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

const SpikeLeft = () => {

    /*   *   *   *   *   *   *   *   *   *   */
    
    return(
    <div className='spike __left'></div>
)};

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

const SpikeRight = () => {

    /*   *   *   *   *   *   *   *   *   *   */
    
    return(
    <div className='spike __right'></div>
)};

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

export { Player, SpikeLeft, SpikeRight };