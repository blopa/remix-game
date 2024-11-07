import { Scene } from 'phaser';

export default class LoadAssetsScene extends Scene {
    constructor() {
        super('LoadAssetsScene');
    }

    preload() {
        // Preload assets for the splash and title screens
    }

    create() {
        this.scene.start('GameScene');
    }
}
