var canvas = new fabric.Canvas('myCanvas');

player_x = 10;
player_y = 10;

block_image_width = 30;
block_image_height = 30;

var player_object = "";
var block_image_object = "";

function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
        player_object = Img;
        player_object.scaleToWidth(140);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
}

function new_image_update(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_image_object = Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image_object);
    });
}

window.addEventListener("keydown", keydownfunc);

function keydownfunc(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if(e.shiftKey == true && keyPressed == '80'){
        console.log("Shift and P pressed");
        block_image_height = block_image_height + 10;
        block_image_width = block_image_width + 10;
        document.getElementById("current_width_span").innerHTML = block_image_width;
        document.getElementById("current_height_span").innerHTML = block_image_height;
    }

    if(e.shiftKey == true && keyPressed == '77'){
        console.log("Shift and M pressed");
        block_image_height = block_image_height - 10;
        block_image_width = block_image_width - 10;
        document.getElementById("current_width_span").innerHTML = block_image_width;
        document.getElementById("current_height_span").innerHTML = block_image_height;
    }

    if(keyPressed == '38'){
        up();
        console.log("up");
    }
    if(keyPressed == '40'){
        down();
        console.log("down");
    }
    if(keyPressed == '37'){
        left();
        console.log("left");
    }
    if(keyPressed == '39'){
        right();
        console.log("right");
    }

    if(keyPressed == '87'){
        new_image_update('wall.jpg');
        console.log("W");
    }

    if(keyPressed == '71'){
        new_image_update('ground.png');
        console.log("G");
    }

    if(keyPressed == '76'){
        new_image_update('light_green.png');
        console.log("L");
    }

    if(keyPressed == '84'){
        new_image_update('trunk.jpg');
        console.log("T");
    }

    if(keyPressed == '82'){
        new_image_update('roof.jpg');
        console.log("R");
    }

    if(keyPressed == '89'){
        new_image_update('yellow_wall.png');
        console.log("Y");
    }

    if(keyPressed == '68'){
        new_image_update('dark_green.png');
        console.log("D");
    }

    if(keyPressed == '85'){
        new_image_update('unique.png');
        console.log("U");
    }

    if(keyPressed == '67'){
        new_image_update('cloud.jpg');
        console.log("C");
    }
}