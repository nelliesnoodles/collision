# A collision experiment in JavaScript
This is an example of collision Detection with Javascript <canvas>.
The animation rests at the bottom, and shows the coordinates as each image is drawn.  When the image intercepts the boundaries of the canvas,  the table reference 'collision' will read true (for a very brief moment). While the image is not beyond the borders of the canvas, it will read false.
  
## Tables
The javascript class that returns the values in the top two tables just uses Math.abs() to check if the x values or y values intersect within a given range.  

## The Collision class

<pre><code>

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
</pre></code>

For the animation on the page, the class Collision is not used.  The boundaries of the canvas are easily compared to the coordinates of the image, and the class is not necessary.  The tables above the animation show how it is used to find if the set of coordinates given intersect within a given range.  If there are two sets of coordinates, as in two images, the check_all_xy() of Collision will send a True in the case that either of the set of points, either on x, or y axis intersect within a given range. 

If your interested in seeing this in action with some python, I have created a GUI with python pygame, and the code is available, updated and ready to use at this blogger link: 
[Python, pygame bubble collision, by: Nellie Tobey](https://camelcasenoodles.blogspot.com/2018/05/pygame-move-collide-circles.html]) 
