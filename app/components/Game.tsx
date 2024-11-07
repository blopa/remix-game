import { useEffect } from "react";
import { ThemeProvider } from "reactro-ui-lib";
import Phaser from "phaser";
import BootScene from "~/scenes/BootScene";
import GameScene from "~/scenes/GameScene";
import LoadAssetsScene from "~/scenes/LoadAssetsScene";

export default function Game() {
    useEffect(() => {
        const getGameSize = () => ({
            width: window.innerWidth,
            height: window.innerHeight,
        });

        const game = new Phaser.Game({
            type: Phaser.AUTO,
            ...getGameSize(),
            parent: "game-content",
            autoRound: true,
            pixelArt: true,
            roundPixels: true,
            scene: [BootScene, LoadAssetsScene, GameScene],
            backgroundColor: "#282c34",
        });

        const handleResize = () => {
            const { width, height } = getGameSize();
            game.scale.resize(width, height);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            game.destroy(true);
        };
    }, []);

    return (
        <ThemeProvider theme="cherry" font="venice">
            <div style={{ textAlign: "center" }}>
                <div id="game-content" style={{ width: "100vw", height: "100vh" }} />
                <div id="react-content" style={{
                    width: "100vw",
                    height: "100vh",
                    position: "absolute",
                    top: 0,
                    left: 0,
                }}>
                    <p>Loading...</p>
                </div>
            </div>
        </ThemeProvider>
    );
}
