import React from 'react';
import { Document as RichTextDocument, BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';
import { documentToReactComponents, Options } from '@contentful/rich-text-react-renderer';

type RichTextProps = {
	document: RichTextDocument | null;
};

const renderOptions: Options = {
	renderNode: {
		[BLOCKS.PARAGRAPH]: (node: any, children: React.ReactNode) => <p className="my-8">{children}</p>,
		[BLOCKS.OL_LIST]: (node: any, children: React.ReactNode) => <ol className="ml-3 list-decimal">{children}</ol>,
		[BLOCKS.UL_LIST]: (node: any, children: React.ReactNode) => <ul className="ml-3 list-disc">{children}</ul>,
		[BLOCKS.LIST_ITEM]: (node: any, children: React.ReactNode) => <li className="my-2 [&>p]:my-0">{children}</li>,
		[BLOCKS.QUOTE]: (node: any, children: React.ReactNode) => <blockquote className="my-8 p-4 border-s-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800">{children}</blockquote>,
		[INLINES.HYPERLINK]: (node, children) => (
            <a href={node.data.uri} className="font-medium underline hover:no-underline text-blue-600 dark:text-blue-500" target='_blank'>
                {children}
            </a>
        ),
	},
	renderMark: {
		[MARKS.BOLD]: (text) => <strong className='text-medium font-medium text-black dark:text-white'>{text}</strong>,
		[MARKS.ITALIC]: (text) => <em>{text}</em>,
		[MARKS.UNDERLINE]: (text) => <u>{text}</u>,
		[MARKS.CODE]: (text) =>
			<code className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto my-4">
				{text}
			</code>
	},
	preserveWhitespace: true
};

const RichText: React.FC<RichTextProps> = ({ document }) => {
	if (!document) {
		return null;
	}

	return (
		<div className="text-justify text-muted-foreground dark:text-font-dark-mode">
			{documentToReactComponents(document, renderOptions)}
		</div>
	);
};

export default RichText;
