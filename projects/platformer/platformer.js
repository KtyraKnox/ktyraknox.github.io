$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    //create walls
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /**
     * Uncomment the loops below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can give you a better idea of where to create new platforms
     * You won't be able to play the game while these lines are uncommented
     * Comment the lines out to remove the grid
     */

    // Loop to create vertical grid lines
    // for (let i = 100; i < canvas.width; i += 100) {
    //   createPlatform(i, 0, 1, canvas.height);
    // }

    // Loop to create horizontal gride lines
    // for (let i = 100; i < canvas.height; i += 100) {
    //   createPlatform(0, i, canvas.width, 1);
    // }

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)

createPlatform(200, 603, 300, 20);
createPlatform(620, 500, 300, 20);
createPlatform(1001, 400, 60, 20);
createPlatform(650, 300, 200, 20);
createPlatform(1200, 300, 100, 20);
createPlatform(400, 200, 120, 20);
createPlatform(100, 100, 100, 20);
createPlatform(100, 400, 90, 20);
createPlatform(700, 100, 80, 20);
createPlatform(1020, 120, 100, 20);
createPlatform(1200, 600, 100, 20);

    
    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)

    
  createCollectable("kennedi", 1250, 300, 21, 0.5); // creates a "kennedi" collectible at the coordinates (1250, 300), falling with a high gravity of 20, and bouncing with 50% bounce
  createCollectable("diamond", 100, 300, 10, 0.5); // creates a "diamond" collectible at the coordinates (100, 300), falling with a high gravity of 20, and bouncing with 50% bounce
  createCollectable("steve", 700, 300, 27, 0.5); // creates a "steve" collectible at the coordinates (700, 300), falling with a high gravity of 20, and bouncing with 50% bounce 

    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)

createCannon("left", 200, 500, 20);
createCannon("right", 200, 500, 20);
createCannon("top", 400, 500, 20);
createCannon("top", 1080, 500, 20);


    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
