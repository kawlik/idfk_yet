import { PlayerShape } from './Shape';

/*   *   *   *   *   *   *   *   *   *   */

class Game {

    constructor(selector) {

        this.selector = selector;

        this.board = null;
        this.player = null;
        this.score = null;
        this.speed = null;
    }

    setUp = () => {
        this.board = document.querySelector(this.selector);
        if(this.board) {

            //  Board is avalible
            this.player = new PlayerShape('#player', this.board.offsetWidth);
            this.player.changeSide(this.side);

            this.score = 0;
            this.side = false;
            this.speed = 2000;

            //  Board onClick event
            this.board.addEventListener('click', this.clickListener);
        }
    }

    clickListener = () => {
        this.side = !this.side;
        this.player.changeSide(this.side);
    }
    
}

/*   *   *   *   *   *   *   *   *   *   */

export default Game;