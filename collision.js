
/*
<td id="x_one"></td>
    <td id="x_two"></td>
    <td id="range_x"></td>
    */


//testing collision class

var coord_x1;
var coord_x2;
var range_x;
var bool_one;
var user_x1;
var user_x2;
var user_range_x;
var coord_y1;
var coord_y2;
var range_y;
var bool_two;
var user_y1;
var user_y2;
var user_range_y;
/* bouncing planet example */
var planet_x = 150;
var planet_y = 150;
const planet_width = 40;
const planet_height = 40;
let x_boundary_min = 0;
let x_boundary_max;
let y_boundary_min = 0;
let y_boundary_max;
let my_canvas;
let ctx;
var direction_x = 1;
var direction_y = 1;
const speed_x = 5;
const speed_y = 6;
var show_x_coords;
var show_y_coords;
var show_bool;



function set_DOM() {
    coord_x1 = document.getElementById('x_one');
    coord_x2 = document.getElementById('x_two');
    range_x = document.getElementById('range_x');
    bool_one = document.getElementById('bool_one');
    user_x1 = document.getElementById('user_x1');
    user_x2 = document.getElementById('user_x2');
    user_range_x = document.getElementById('user_range_x');
    coord_y1 = document.getElementById('y_one');
    coord_y2 = document.getElementById('y_two');
    range_y = document.getElementById('range_y');
    bool_two = document.getElementById('bool_two');
    user_y1 = document.getElementById('user_y1');
    user_y2 = document.getElementById('user_y2');
    user_range_y = document.getElementById('user_range_y');   
    my_canvas = document.getElementById("bounce");
    ctx = my_canvas.getContext("2d");
    y_boundary_max = my_canvas.height - planet_height;
    x_boundary_max = my_canvas.width - planet_width;
    show_x_coords = document.getElementById('show_x_coords')
    show_y_coords = document.getElementById('show_y_coords')
    show_bool = document.getElementById('show_bool')


}

class Collision {
    /*
     * item_x, item_y  
     * item2_x, item2_y
     * Check if the coordinates are within range of each other, or collide     * 
     */
    constructor(item_x, item_y, item2_x, item2_y) {
        this.item_x = item_x
        this.item_y = item_y
        this.item2_x = item2_x
        this.item2_y = item2_y
    }

    set_range(range_x, range_y) {
        this.range_x = range_x
        this.range_y = range_y
    }

    check_collide_x() {
        /*
         * If the x, y of the class items are within range of each other,
         * return a True for collision detected, False if they are not within range
         */
        var check_x = Math.abs(this.item_x - this.item2_x)
       
        if (check_x <= this.range_x) {
            return true
        }
        return false
    }

    check_collide_y() {
        var check_y = Math.abs(this.item_y - this.item2_y)
        if (check_y <= this.range_y) {
            return true
        }
        return false

    }
    check_all_xy() {
        let collision_on_x = this.check_collide_x()
        let collision_on_y = this.check_collide_y()
        if (collision_on_x || collision_on_y) {
            return true
        }
        return false
    }
}



function test_collide() {
    var x1 = 2;
    var x2 = 5;
    var y1 = 3;
    var y2 = 6;
    var r_of_x = 2;
    var r_of_y = 1;
    let test1 = new Collision(x1, y1, x2, y2);
    test1.set_range(r_of_x, r_of_y)
    let result = test1.check_collide_x();
    /*set the table
    var coord_x1;
    var coord_x2;
    var range_x;
    var bool_one;
    */
    coord_x1.innerHTML = x1
    coord_x2.innerHTML = x2
    range_x.innerHTML = r_of_x
    bool_one.innerHTML = result



}

function get_x_data() {
    console.log(" x data submission entered")
    var y1 = 0
    var y2 = 0
    var r_of_y = 10
    var x1 = parseInt(user_x1.value);
    var x2 = parseInt(user_x2.value);
    var r_of_x = parseInt(user_range_x.value);


    collide = new Collision(x1, y1, x2, y2)
    collide.set_range(r_of_x, r_of_y)
    var result = collide.check_collide_x()
    coord_x1.innerHTML = x1
    coord_x2.innerHTML = x2
    range_x.innerHTML = r_of_x
    bool_one.innerHTML = result
  

};

function get_y_data() {
    console.log(" y data submission entered")
    var y1 = parseInt(user_y1.value)
    var y2 = parseInt(user_y2.value)
    var r_of_y = parseInt(user_range_y.value)
    console.log(`range of y = ${r_of_y}`)
    var x1 = 1
    var x2 = 1
    var r_of_x = 10


    collide2 = new Collision(x1, y1, x2, y2)
    collide2.set_range(r_of_x, r_of_y)
    var result = collide2.check_collide_y()
    coord_y1.innerHTML = y1
    coord_y2.innerHTML = y2
    range_y.innerHTML = r_of_y
    bool_two.innerHTML = result


}

function draw_planet() {
    planet = new Image()
    planet.src = "planet.png"
    ctx.clearRect(0, 0, my_canvas.width, my_canvas.height);
    planet.onload = () => {
        ctx.drawImage(planet, planet_x, planet_y, planet_width, planet_height);

    }
    
}
function load_coords() {

}
function collision_animation() {
    //these are collisions of image with canvas boundaries
    var bool_value = 'false'
    if (planet_x > x_boundary_max) {
        direction_x *= -1
        bool_value = 'true'
        
    }
    if (planet_x < 15) {
        direction_x = 1
        bool_value = 'true'
    }

    if (planet_y > y_boundary_max) {
        direction_y *= -1
        bool_value = 'true'
    }
    if (planet_y < 15) {
        direction_y = 1
        bool_value = 'true'
    }
    planet_x += speed_x * direction_x
    planet_y += speed_y * direction_y
    show_bool.innerHTML = bool_value
    show_x_coords.innerHTML = planet_x
    show_y_coords.innerHTML = planet_y
    draw_planet()
}

function run_bounce() {
    setInterval(collision_animation, 200)
}




window.onload = (event) => {
    
    set_DOM();
    run_bounce();
    
};

/*
window.addEventListener('load', (event) => {
    set_DOM()
    //test_collide()
    set_EventListeners()
   
});
*/
