import Player from "../gameObjects/player.js";

export default class gameMaster extends Phaser.Scene {
  constructor() {
    super("gameMaster");
  }
  create() {
    for (let y = 0; y < 26; y++) {
      for (let x = 0; x < 44; x++) {
        let tile = Math.round(Math.random() * 5);
        if (tile === 0) tile = "T0";
        if (tile === 1) tile = "T1";
        if (tile === 2) tile = "T2";
        if (tile === 3) tile = "T3";
        if (tile === 4) tile = "T4";
        this.add.image(x * 45, y * 45, "atlas", tile);
      }
    }
  }

  update(time, delta) {
    /*if (this.cursors.left.isDown) {
      this.walking(-100, true);
    } else if (this.cursors.right.isDown) {
      this.walking(100, false);
    } else if (this.cursors.down.isDown) {
      this.mining();
    } else {
      this.player.body.setVelocityX(0);
      this.player.anims.play("turn");
    }

    if (this.cursors.up.isDown && this.player.body.touching.down) {
      this.player.body.setVelocityY(-250);
    }*/
  }

  walking(velocity, flip) {
    this.beak.clear(true, true);
    this.player.body.setVelocityX(velocity);
    this.player.flipX = flip;
    this.player.anims.play("walk", true);
  }

  async mining() {
    if (this.player.x == 416 || this.player.x == 784) {
      this.beak.clear(true, true);
      this.beak.create(this.player.x + 2, this.player.y + 2, "beak");
      this.beak.setOrigin(1, 1);
      //this.beak.children.
      //this.beak.setRotation(60);
      //this.beak.angle(0);
      //await this.delay(0.5);
      //this.beak.angle(10);
      /*for (let i = 0; i < 50; i++) {
                //this.beak.angle(-10);
                this.beak.setRotation(60);
                await this.delay(0.5);
                //this.beak.angle(10);
                this.beak.setRotation(0);
            }*/
    }
  }

  delay(n) {
    return new Promise(function (resolve) {
      setTimeout(resolve, n * 1000);
    });
  }
}
