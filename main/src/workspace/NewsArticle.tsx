import { RichText } from './RichText'

const mark = /^(#{1,4}\s+|\*\*)|\*\*$/g
const plain = (line: string) => line.trim().replace(mark, '').trim()

/**
 * A News Article draft laid out like a newspaper page. Models often drop the Markdown marks,
 * so the first line is read as the headline and a line right under it as the sub-headline,
 * with or without "#" and "**".
 */
export function NewsArticle({ text, className = '' }: { text: string; className?: string }) {
  const lines = text.trim().split('\n')
  const first = plain(lines[0] ?? '')
  // A long first line is a paragraph, not a headline: render the draft as it is.
  const hasHead = first.length > 0 && first.length <= 160
  const second = lines[1]?.trim() ?? ''
  const hasSub = hasHead && second.length > 0 && second.length <= 250 && !/^([-*•]\s|\d+[.)]\s)/.test(second)
  const body = hasHead ? lines.slice(hasSub ? 2 : 1).join('\n') : text

  return (
    <div className={`sk-sheet mx-auto max-w-[760px] rounded-2xl bg-white ${className}`}>
      <div className="mb-7 flex items-center justify-between border-y-2 border-ink py-2.5">
        <p className="text-[12.5px] font-semibold text-ink">News article</p>
        <p className="text-[12px] text-ink-mute">For publication</p>
      </div>
      {hasHead && <h2 className="font-display text-[28px] leading-tight text-ink">{first}</h2>}
      {hasSub && <p className="mt-3 text-[16px] font-semibold leading-snug text-ink/80">{plain(second)}</p>}
      <div className="mt-5 [&_p]:text-[15px] [&_p]:leading-[1.75]"><RichText text={body} /></div>
    </div>
  )
}
