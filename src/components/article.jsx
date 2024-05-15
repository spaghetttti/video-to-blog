import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import 'github-markdown-css';
import 'tailwindcss/tailwind.css'
import '/public/styles/custom.css';
import { Button } from './ui/button';
import { Octokit } from '@octokit/core';

const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN
})

export function Article() {
    const [markdownContent, setMarkdownContent] = useState('');
    const [htmlContent, setHtmlContent] = useState('');

    useEffect(() => {
        fetch('/output/merged_output.md')
            .then(response => response.text())
            .then(async markdownContent => {
                setMarkdownContent(markdownContent);

                const response = await octokit.request('POST /markdown', {
                    text: markdownContent,
                    headers: {
                        'X-GitHub-Api-Version': '2022-11-28'
                    }
                });

                setHtmlContent(response.data);

            });
    }, []);

    console.log(htmlContent);

    return (
        <div key="1" className="flex flex-col min-h-[100dvh]">
            <main className="flex-1">
                <div className="px-4 md:px-6 py-12 md:py-24 lg:py-32">
                    <div className="prose prose-gray max-w-6xl mx-auto dark:prose-invert">
                        <article className="markdown-body custom-class" dangerouslySetInnerHTML={{ __html: htmlContent }} />
                        <div className="mt-12 flex items-center gap-4">
                            <Button variant="outline">Share</Button>
                            <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                                <CalendarDaysIcon className="h-5 w-5"/>
                                <span>May 14, 2024</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

function CalendarDaysIcon(props) {
    return (
        (<svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path d="M8 2v4" />
            <path d="M16 2v4" />
            <rect width="18" height="18" x="3" y="4" rx="2" />
            <path d="M3 10h18" />
            <path d="M8 14h.01" />
            <path d="M12 14h.01" />
            <path d="M16 14h.01" />
            <path d="M8 18h.01" />
            <path d="M12 18h.01" />
            <path d="M16 18h.01" />
        </svg>)
    );
}