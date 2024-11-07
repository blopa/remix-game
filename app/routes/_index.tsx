import { lazy, Suspense } from "react";
import styles from "~/styles/index.module.css";

const Game = lazy(() => import("~/components/Game"));

export default function Index() {
    return (
        <div className={styles.container}>
            <Suspense fallback={<p className={styles.loading}>Loading...</p>}>
                <Game />
            </Suspense>
        </div>
    );
}
