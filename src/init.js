import gameState, {
    handleUserAction
} from './gameState'
// const TICK_RATE = 3000;
import {
    TICK_RATE
} from './constants'

import initButtons from './buttons'

// function tick() {
//   // eslint-disable-next-line no-console
//   console.log("tick", Date.now());
// }

// eslint-disable-next-line no-unused-vars
async function init() {
    // eslint-disable-next-line no-console
    console.log("starting right now");
    initButtons(handleUserAction)

    let nextTimeToTick = Date.now();

    function nextAnimationFrame() {
        const now = Date.now();

        if (nextTimeToTick <= now) {
            gameState.tick()
            nextTimeToTick = now + TICK_RATE;
        }

        requestAnimationFrame(nextAnimationFrame);
    }

    requestAnimationFrame(nextAnimationFrame);
}
init();
