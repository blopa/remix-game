export const createMap = (
    scene: Phaser.Scene,
    mapKey: string,
    tilesetName: string,
) => {
    const map = scene.make.tilemap({ key: mapKey });
    map.addTilesetImage(tilesetName, tilesetName);

    map.layers.forEach((layerData) => {
        const layer = map.createLayer(
            layerData.name,
            [tilesetName],
            0,
            0
            // mapData.x,
            // mapData.y
        );

        layer?.setCollisionByProperty({ collides: true });
    });
}