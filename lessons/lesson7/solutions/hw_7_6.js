/*
HOMEWORK 7.6: DRAW A TRIANGLE BONUSES
Expand the previous homework to draw a triangle.
Bonus: Use document.writeln(String) to print to the browser. Don't forget the line break "<b>"
Bonus 2: Add an argument x to the function, and contruct a triangle with x levels.
Bonus 3: Rewrite the function with while-loops
*/
let x, y, chr;
function drawStars(levels) {
    let x = 1;
    while (x <= levels) {
        chr = '';
        let y = 1;
        while (y < x) {
            chr = chr + ("*");
            y++;
        }
        document.writeln(chr + "<br>")
        x++
    }
}

drawStars(10)
drawStars(34)
drawStars(45)
