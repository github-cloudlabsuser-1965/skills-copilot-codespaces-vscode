import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

// index.js

export default function MarkdownEditor() {
    const [markdown, setMarkdown] = useState("type markdown here");

    const handleChange = (event) => {
        setMarkdown(event.target.value);
    };

    // Example data array
    const data = [
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" },
        { id: 3, name: "Charlie" }
    ];

    // Extract names from the data array
    const names = data.map(item => item.name).join(', ');

    return (
        <div style={{ display: 'flex', flexDirection: 'column', padding: '20px' }}>
            <textarea
                style={{ width: '100%', height: '200px', marginBottom: '20px', fontSize: '16px' }}
                value={markdown}
                onChange={handleChange}
            />
            <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
                <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>
            <div style={{ marginTop: '20px', fontSize: '16px' }}>
                <strong>Names:</strong> {names}
            </div>
        </div>
    );
}