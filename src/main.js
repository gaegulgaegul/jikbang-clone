import {render} from "./util/Utils.js";
import App from "./component/App.js";
import {moveMapPage} from "./hooks/useHeader.js";
import "../assets/css/style.css";


render(App, document.querySelector('#app'));
moveMapPage();

document.addEventListener('click', ({target}) => {
    // console.log(target);
});