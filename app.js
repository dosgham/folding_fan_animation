

var image = document.createElement('img');
image.src = 'https://thumbs.dreamstime.com/b/round-pine-crane-year-end-ink-painting-songhe-yannian-zhongtang-cranes-trees-flowers-birds-chinese-ancient-songs-stone-133364029.jpg';

const images_sources = ['https://thumbs.dreamstime.com/b/chinese-ink-painting-art-background-elegant-tranquil-landscape-view-mountain-full-moon-crane-bird-standing-lake-178022465.jpg',
    'https://thumbs.dreamstime.com/b/pine-tree-white-crane-decorative-painting-pine-tree-white-crane-decorative-painting%C3%AF%C2%BC%C5%93-flower-bird-chinese-painting-125778983.jpg',
    'https://thumbs.dreamstime.com/b/ink-landscape-chinese-painting-like-fairyland%C3%AF%C2%BC%C5%93forest-distant-mountains-mountain-forest-quiet-paradise-earth-misty-clouds-126057607.jpg',
    'https://thumbs.dreamstime.com/b/round-pine-crane-year-end-ink-painting-songhe-yannian-zhongtang-cranes-trees-flowers-birds-chinese-ancient-songs-stone-133364029.jpg'];
const pieces = 30;
var angle0 = 90;
var index = 0;
const canvas_agreg = new Array(pieces);
const ctx_agreg = new Array(pieces);
const total_angle = Math.PI;
var angle_final_piece;
var opacity1 = 0.2;
var opacity2 = 0.4;
var is_open = true;
var static_angle = 0;
var rotation_speed = 10;
static_piece = 7;
var fan = {
    angle_start: 0,
    angle_end: 0,
    fillStyle: `rgba(212, 163, 115,${opacity1})`,
    vertical_angle: 0,
    ref_line_angle: 0,
    Delta: 0,
    static_piece: 0
};
var fan_container_angle = {
    X_offset: 0,
    X_angle: 0,
    Y_angle: 30,
    Z_angle: 0
}

angle0 = 80;
var delta = total_angle / pieces - Math.atan(Math.tan(total_angle / pieces) * Math.cos(angle0 / 180 * Math.PI));
opacity2 = opacity1 + angle0/450;
var fan_container = document.querySelector('.fan-container');


for (let i = 0; i < pieces + 2; i++) {
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    canvas_agreg[i] = canvas;
    ctx_agreg[i] = ctx;
}

animation_fan_open();


function animation_fan_open() {
    if (image.complete) {
        draw_all();
    } else {
        image.onload = (() => {
            draw_all();
        })
    }
    angle0 = angle0 - 1;
    delta = total_angle / pieces - Math.atan(Math.tan(total_angle / pieces) * Math.cos(angle0 / 180 * Math.PI));
    opacity2 = opacity1 + angle0/450;
    if (angle0 > 0) {
        setTimeout(() => {
            animation_fan_open();
        }, 3);
    } else {
        setTimeout(() => {
            animation_fan_close();
        }, 300)
    }
}

function animation_fan_close() {

    if (image.complete) {
        draw_all();
    } else {
        image.onload = (() => {
            draw_all();
        })
    }
    angle0 = angle0 + 1;
    opacity2 = opacity1 + angle0/450;
    delta = total_angle / pieces - Math.atan(Math.tan(total_angle / pieces) * Math.cos(angle0 / 180 * Math.PI));
    if (angle0 < 90) {
        setTimeout(() => {
            animation_fan_close();
        }, 3)
    }
    else {
        index = index + 1;

        fan_container_angle.Y_angle = (Math.random() - 0.5) * 120;
        fan_container.style.transform = `rotateY(${fan_container_angle.Y_angle}deg)`
        image.src = images_sources[index % 4];
        if (image.complete) {
            setTimeout(() => {
                animation_fan_open();
            }, 3)
        } else {
            image.onload = (() => {
                setTimeout(() => {
                    animation_fan_open();
                }, 3)
            })
        }

    }
}

function draw_all() {
    for (let i = 0; i < pieces / 2; i++) {
        fan.angle_start = -i * 2 / pieces * total_angle;
        fan.angle_end = -(i * 2 + 1) / pieces * total_angle;
        fan.fillstyle = `rgba(212, 163, 115,${opacity1})`;
        fan.piece_angle = angle0;

        fan.ref_line_angle = -(i * 2 + 1) / pieces * total_angle;
        fan.Delta = delta * (2 * (i - static_piece) + 1);
        drawFan(canvas_agreg[i * 2], ctx_agreg[i * 2], fan);


        fan.angle_start = -(i * 2 + 1) / pieces * total_angle;
        fan.angle_end = -(i * 2 + 2) / pieces * total_angle;
        fan.fillstyle = `rgba(212, 163, 115,${opacity2})`;
        fan.piece_angle = -angle0;
        drawFan(canvas_agreg[i * 2 + 1], ctx_agreg[i * 2 + 1], fan);
    }

    fan.angle_start = total_angle / pieces;
    fan.angle_end = 0;
    fan.fillstyle = `rgba(212, 163, 115,1)`;
    fan.piece_angle = 90;
    fan.ref_line_angle = 0;
    fan.Delta = delta * (2 * (0 - static_piece));
    drawFan(canvas_agreg[pieces], ctx_agreg[pieces], fan);

    fan.angle_start = -total_angle;
    fan.angle_end = -total_angle * (1 + 1 / pieces);
    fan.fillstyle = `rgba(212, 163, 115,1)`;
    fan.piece_angle = -90;
    fan.ref_line_angle = -total_angle;
    fan.Delta = delta * (2 * (pieces / 2 - static_piece));
    drawFan(canvas_agreg[pieces + 1], ctx_agreg[pieces + 1], fan);
}

function drawFan(canvas, ctx, fan) {
    const { angle_start, angle_end, fillstyle, piece_angle, ref_line_angle, Delta, static_piece } = fan;
    canvas.width = 1000;
    canvas.height = 500;
    canvas.style.height = '40vmin';
    canvas.style.width = '80vmin';
    image.style.height = '40vmin';
    image.style.width = '80vmin';
    canvas.style.position = 'absolute';
    canvas.style.top = 'calc(40vh - 40vmin)';
    canvas.style.left = 'calc(50vw - 40vmin)';
    fan_container.appendChild(canvas);


    ctx.clearRect(0, 0, 1000, 500);
    ctx.save();
  
    ctx.translate(500, 500);
    ctx.rotate(Delta);
 
    ctx.translate(-500, -500);
    ctx.fillStyle = fillstyle;
    ctx.beginPath();

   
    ctx.arc(500, 500, 500, angle_start, angle_end, true);
    ctx.lineTo(500, 500);
    ctx.strokeStyle = '#d4a373';
    ctx.lineWidth = 1;

    ctx.stroke()
    ctx.clip();

    ctx.drawImage(image, 0, 0, 1000, 500);
    ctx.fill();
    ctx.fillStyle = `#d4a373`;
    ctx.beginPath();
   
    ctx.arc(500, 500, 100, angle_start, angle_end, true);

    ctx.lineTo(500, 500);
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.lineWidth = 2;
 
    ctx.moveTo(500, 500);
    ctx.strokeStyle = '#d4a373';
  
    ctx.lineTo(500 + Math.cos(angle_end) * 500, 500 + Math.sin(angle_end) * 500);
    ctx.stroke();
    canvas.style.transform = `translateZ(0vmin) rotate3d(${Math.cos(ref_line_angle + Delta)},${Math.sin(ref_line_angle + Delta)},0,${piece_angle}deg)`;
    canvas.style.transformOrigin = '40vmin 40vmin 0vmin';

    ctx.restore();

    fan_container.style.transform = `translateX(${fan_container_angle.X_offset}vw) rotateY(${fan_container_angle.Y_angle}deg) rotateX(${fan_container_angle.X_angle}deg) rotateZ(${fan_container_angle.Z_angle}deg)`;


   
}




