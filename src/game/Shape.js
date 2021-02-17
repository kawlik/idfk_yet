class Shape {

    constructor(selector) {

        this.selector = selector;
        this.interval = null;
        this.shape = null;

        this.center = {x: null, y: null};
        this.radius = null;

        this.coordinates = {
            lt: {x: null, y: null},
            rb: {x: null, y: null}
        };

        this.setUp();
    }

    setUp = () => {
        this.shape = document.querySelector(this.selector);
        if(this.shape) {
            
            this.getCoordinates();
            //this.interval = setInterval(this.getCoordinates, 10);
        }
    }

    getCoordinates = () => {
        const lt = {x: this.shape.offsetLeft, y: this.shape.offsetTop};
        const rb = {x: lt.x + this.shape.offsetWidth, y: lt.y + this.shape.offsetHeight};
        
        const center = {x: Math.abs(lt.x - rb.x), y: Math.abs(lt.y - rb.y)};
        const radius = (center.x + center.y) / 4;

        this.center = center;
        this.radius = radius;

        this.coordinates = {lt, rb};
    }
}

/*   *   *   *   *   *   *   *   *   *   */

class PlayerShape extends Shape {

    constructor(selector, boardWidth) {
        super(selector);

        this.boardWidth = boardWidth;
        this.width = Math.abs(this.coordinates.lt.x - this.coordinates.rb.x);
    }

    changeSide = side => {
        const translate = this.boardWidth/2 - 3*this.width/4;
        const direction = side ? translate : -translate;

        const transform = `translateX(${direction}px) rotate(${direction > 0 ? 0 : -90}deg)`;
        this.shape.style.transform = transform;
    }
}

export { PlayerShape, Shape };