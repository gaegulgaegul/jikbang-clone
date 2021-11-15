import {render} from "./util/Utils.js";
import App from "./component/App.js";
import {moveMapPage} from "./hooks/useHeader.js";
import "../assets/css/style.css";
import {bindBoardButton} from "./hooks/useDashboard.js";

render(App, document.querySelector('#app'));
moveMapPage();
bindBoardButton();