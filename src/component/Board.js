import Header from "./Header.js";

const Board = (type, items) => {
    return `
        ${Header()}
        <div class="container bg-font-gray">
            <div class="board-page">
                <h2>공지사항</h2>
                <ul>
                    ${items.map(item => `
                        <li>
                            <span class="board-page-subject">[공지] 직방 개인정보처리방침(2021/02/11) 개정 안내</span>
                            <span class="board-page-date">2021.11.11</span>
                        </li>
                    `)}
                </ul>
            </div>
        </div>
    `;
};

export default Board;