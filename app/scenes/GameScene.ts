import { Scene } from 'phaser';

export default class GameScene extends Scene {
    constructor() {
        super('GameScene');
    }

    preload() {
        // Preload assets for the splash and title screens
    }

    create() {
        const { width, height } = this.sys.game.canvas;
        this.add.text(width / 2, height / 2, "Hello, World!", {
            fontSize: "32px",
            color: "#ffffff",
        }).setOrigin(0.5);
    }
}
