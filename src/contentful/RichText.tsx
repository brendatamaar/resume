import { Document as RichTextDocument } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

type RichTextProps = {
	document: RichTextDocument | null
}

function RichText({ document }: RichTextProps) {
	if (!document) {
		return null
	}

	return <div className="[&>p]:mt-6 [&>p]:mb-2 [&>h2]:font-bold [&>ul]:list-disc [&>ul]:ml-3 [&>ol]:list-decimal [&>ol]:ml-3 text-zinc-800 dark:text-zinc-300 md:text-md/relaxed lg:text-md/relaxed xl:text-md/relaxed">
		{documentToReactComponents(document)}
	</div>
}

export default RichText
