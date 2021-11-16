import Header from "./Header.js";

/**
 * 게시판 Component
 * @param title
 * @param items
 * @returns string
 * @constructor
 */
const Board = (title, items) => {
    return `
        ${Header()}
        <div class="container bg-font-gray">
            <div class="board-page">
                <h2>${title}</h2>
                <ul>
                    ${items.map(item => `
                        <li>
                            <span class="board-page-subject">${item.subject}</span>
                            <span class="board-page-date">${item.registerDate}</span>
                        </li>
                    `).join('')}
                </ul>
            </div>
        </div>
    `;
};

export default Board;