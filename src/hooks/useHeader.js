import {render} from "../util/Utils.js";
import {renderMap} from "./useRoadMap.js";
import RoadMap from "../component/RoadMap.js";

const useHeader = () => {

    const moveMapPage = (event) => {
        document.querySelectorAll('.category-container li')
            .forEach(element => element.addEventListener('click', ({ target }) => {
                if (!target) return;

                const item = target.closest('li');
                if (!item) return;
                const id = item.id;
                render(RoadMap, document.querySelector('#app'));
                renderMap();
            }))

    };

    return {
        moveMapPage
    };
};

export const { moveMapPage } = useHeader();