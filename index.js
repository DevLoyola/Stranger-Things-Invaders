import { EnemyController } from "./EnemyController.js";
import { Player } from "./Player.js";
import { bulletController } from "./BulletController.js";

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 600;

const background = new Image();
background.src = "images/lair.png";

const playerBulletController = new bulletController(canvas, 10, "white", true);
const enemyBulletController = new bulletController(canvas, 4, "red", false);

const enemyController = new EnemyController(
  canvas,
  enemyBulletController,
  playerBulletController
);
const player = new Player(canvas, 3, playerBulletController);

function game() {
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  enemyController.draw(ctx);
  player.draw(ctx);
  playerBulletController.draw(ctx);
  enemyBulletController.draw(ctx);
}

setInterval(game, 1000 / 60);
