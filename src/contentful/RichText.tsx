import { Document as RichTextDocument } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

type RichTextProps = {
	document: RichTextDocument | null
}

function RichText({ document }: RichTextProps) {
	if (!document) {
		return null
	}

	return <div className="[&>p]:mt-6 [&>p]:mb-4 [&>p]:text-muted-foreground [&>p]:dark:text-font-dark-mode [&>ul]:text-muted-foreground [&>ul]:dark:text-font-dark-mode [&>ol]:text-muted-foreground [&>ol]:dark:text-font-dark-mode [&>h2]:font-medium [&>ul]:list-disc [&>ul]:ml-3 [&>ol]:list-decimal [&>ol]:ml-3 text-justify">
		{documentToReactComponents(document)}
	</div>
}

export default RichText
