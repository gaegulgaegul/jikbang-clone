import {moveMainPage} from "./useHeader.js";

/**
 * roadmap Component 관리 hooks
 * @returns {{renderMap: renderMap}}
 */
const useRoadMap = () => {

    // 건물 타입별 검색 키워드 정보
    const buildingType = {
        "apt": "아파트",
        "two-room": "투룸 빌라",
        "one-room": "원룸",
        "officetel": "오피스텔",
        "officer": "사무실",
    };

    let map; // 지도
    let infowindow; // 마커를 클릭하면 장소명을 표출할 인포윈도우
    let ps; // 장소 검색 객체
    let currentBuildingType; // 현재 매물 카테고리 타입

    /**
     * roadmap 랜더링
     */
    const renderMap = (type) => {
        // 현재 접근한 매물 카테고리 타입 지정
        currentBuildingType = type;
        // 마커를 클릭하면 장소명을 표출할 인포윈도우
        infowindow = new kakao.maps.InfoWindow({zIndex:1});

        const mapContainer = document.getElementById('roadmap'); // 지도를 표시할 container
        const mapOption = {
            center: new kakao.maps.LatLng(37.566826, 126.9786567), // 지도의 중심좌표
            level: 3 // 지도의 확대 레벨
        };

        // 지도 생성
        map = new kakao.maps.Map(mapContainer, mapOption);

        // 장소 검색 객체 생성
        ps = new kakao.maps.services.Places();

        // 키워드로 장소를 검색합니다
        ps.keywordSearch('구로디지털단지 ' + buildingType[currentBuildingType], placesSearchCB);
        handleSearch();
        moveMainPage();
    };

    /**
     * 키워드로 장소 검색
     */
    const searchRoadMap = () => {
        const keyword = document.querySelector("#search-keyword").value;
        ps.keywordSearch(keyword + ' ' + buildingType[currentBuildingType], placesSearchCB);
    };

    /**
     * 지도 검색 버튼 클릭 이벤트
     */
    const handleSearch = () => {
        document.querySelector(".roadmap-search-button-area")
            .addEventListener('click', () => searchRoadMap());
    };

    /**
     * 키워드 검색 완료 시 호출되는 콜백함수
     * @param data
     * @param status
     */
    const placesSearchCB = (data, status) => {
        if (status === kakao.maps.services.Status.OK) {

            // 검색된 장소 위치를 기준으로 지도 범위를 재설정 하기 위해 LatLngBounds 객체에 좌표 추가
            const bounds = new kakao.maps.LatLngBounds();

            for (let i = 0; i < data.length; i++) {
                displayMarker(data[i]);
                bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
            }

            // 검색된 장소 위치를 기준으로 지도 범위를 재설정
            map.setBounds(bounds);
        }
    }

    // 지도에 마커를 표시하는 함수
    const displayMarker = (place) => {

        // 마커를 생성하고 지도에 표시
        const marker = new kakao.maps.Marker({
            map: map,
            position: new kakao.maps.LatLng(place.y, place.x),
            className: "roadmap-marker"
        });

        // 마커에 클릭이벤트를 등록합니다
        kakao.maps.event.addListener(marker, 'click', function() {
            // 마커를 클릭하면 장소명이 인포윈도우에 표출
            infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
            infowindow.open(map, marker);
        });
    }

    return {
        renderMap
    };
};

export const { renderMap } = useRoadMap();
