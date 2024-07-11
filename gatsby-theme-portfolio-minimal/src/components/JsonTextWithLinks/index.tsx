import React from 'react';

type ListItem = {
    text: string;
    doHighlight?: string;
    includeLink?: boolean;
    link?: string;
};

type RenderOptions = {
    list: ListItem[];
    asHtml?: boolean;
};

// export function JsonTextWithLinks({ text, asHtml = true }: { text: hash; asHtml?: boolean }): React.ReactElement | string {

// }

export function renderList({ list, asHtml = true }: RenderOptions): React.ReactElement | string {
    if (asHtml) {
        let html = '<ul>';
        list.forEach((item) => {
            html += `<li>${item.text}`;
            if (item.doHighlight) {
                html += `<strong>${item.doHighlight}</strong>`;
            }
            if (item.includeLink && item.link) {
                html += `<a href="${item.link}">${item.link}</a>`;
            }
            html += '</li>';
        });
        html += '</ul>';
        return html;
    }

    return (
        <ul>
            {list.map((item, index) => (
                <li key={index}>
                    {item.text}
                    {item.doHighlight && <strong>{item.doHighlight}</strong>}
                    {item.includeLink && item.link && <a href={item.link}>{item.link}</a>}
                </li>
            ))}
        </ul>
    );
}
