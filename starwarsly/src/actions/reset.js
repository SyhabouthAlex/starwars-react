/**
     * Action creator for resetting all states
*/

import { RESET_ALL } from "./types";

function resetAll() {
  return { type: RESET_ALL }
}


export { resetAll }