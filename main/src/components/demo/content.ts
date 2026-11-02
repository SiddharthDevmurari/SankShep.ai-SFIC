// What the demo works on. The source is the team's own SFIC problem statement, and every count shown
// in the mockup is computed from these strings.
import {
  AtSign, ChartPie, Clapperboard, FileText, Languages, Lightbulb, Newspaper, PenLine, Presentation, ShieldAlert,
} from 'lucide-react'
import source from '../../imports/SFIC_Problem_Statement.txt?raw'

export const countWords = (text: string) => (text.trim() ? text.trim().split(/\s+/).length : 0)

export const SOURCE_NAME = 'SFIC_Problem_Statement.txt'
export const SOURCE_TEXT = source.trim()
export const SOURCE_CHARS = SOURCE_TEXT.length
export const SOURCE_WORDS = countWords(SOURCE_TEXT)
export const SOURCE_KB = Math.max(1, Math.round(new TextEncoder().encode(source).length / 1024))

/** The workspace's format grid, in its order (LeftPanel ALL_FORMATS). */
export const FORMATS = [
  { id: 'exec', label: 'Executive Summary', short: 'Executive Summary', desc: 'C-suite brief', icon: FileText },
  { id: 'news', label: 'News Article', short: 'News Article', desc: 'Press-ready report', icon: Newspaper },
  { id: 'x', label: 'Twitter/X Post', short: 'X / Twitter', desc: 'Hook + thread', icon: AtSign },
  { id: 'video', label: 'Video', short: 'Video', desc: 'Script & storyboard', icon: Clapperboard },
  { id: 'deck', label: 'PPT Presentation', short: 'Slide Deck', desc: 'Slides + notes', icon: Presentation },
  { id: 'blog', label: 'Blog Post', short: 'Blog Post', desc: 'SEO long-form', icon: PenLine },
  { id: 'advisory', label: 'Advisory', short: 'Advisory', desc: 'Findings & actions', icon: ShieldAlert },
  { id: 'infographic', label: 'Infographic', short: 'Infographic', desc: 'Stats & layout', icon: ChartPie },
  { id: 'simple', label: 'Simplified Explanation', short: 'Simplified', desc: 'Plain language', icon: Lightbulb },
  { id: 'translation', label: 'Language Translation', short: 'Translation', desc: '13 languages', icon: Languages },
] as const

export type FormatId = (typeof FORMATS)[number]['id']
export const formatOf = (id: FormatId) => FORMATS.find((f) => f.id === id)!

/** The three formats the pointer picks. */
export const DEMO_FORMATS = ['exec', 'news', 'deck'] as const satisfies readonly FormatId[]
export type DraftId = (typeof DEMO_FORMATS)[number]

export const TONES = [
  { label: 'Professional', note: 'polished' },
  { label: 'Technical', note: 'precise' },
  { label: 'Casual', note: 'conversational' },
  { label: 'Academic', note: 'scholarly' },
]

export const AUDIENCES = [
  { id: 'manager', name: 'Manager/Executive' },
  { id: 'hr', name: 'HR/Sales' },
  { id: 'tech', name: 'Technical Team' },
  { id: 'public', name: 'General Public' },
]

/** The cloud models the workspace offers (lib/providers.ts), grouped as its model picker groups them. */
export const PROVIDERS = [
  { name: 'Groq', models: [['qwen/qwen3.8-27b', 'chat'], ['openai/gpt-oss-120b', 'chat'], ['openai/gpt-oss-20b', 'chat'], ['openai/gpt-oss-safeguard-20b', 'chat']] },
  { name: 'Gemini', models: [['gemini-3.5-flash-lite', 'vision'], ['gemini-3.8-flash', 'vision']] },
  { name: 'OpenRouter', models: [['openrouter/free', 'vision'], ['google/gemma-4-31b-it:free', 'vision'], ['nvidia/nemotron-3-ultra-550b-a55b:free', 'chat'], ['thinkingmachines/inkling:free', 'vision'], ['nvidia/nemotron-3.5-lightning:free', 'chat']] },
] as const

export type ModelChoice = { provider: string; model: string }
export const DEFAULT_MODEL: ModelChoice = { provider: 'Groq', model: 'openai/gpt-oss-120b' }
// Gemini reads much longer sources, so it's the one the pointer switches to.
export const DEMO_MODEL: ModelChoice = { provider: 'Gemini', model: 'gemini-3.8-flash' }

export const shortModel = (model: string) => (model.includes('/') ? model.slice(model.lastIndexOf('/') + 1) : model)
export const engineLabel = (m: ModelChoice) => `${m.provider} · ${shortModel(m.model)}`
export const readsImages = (m: ModelChoice) =>
  PROVIDERS.some((p) => p.models.some(([id, kind]) => id === m.model && kind === 'vision'))

export const EMPTY_QUOTE =
  'Transform your content into multiple formats. Upload your source, select your outputs, and generate accurate, editable drafts in seconds.'

export const REFINE_PROMPT = 'Shorter, three paragraphs'

// The drafts are written from the source above: no figures beyond what it states.
export const DRAFTS: Record<DraftId, string> = {
  exec: `## The ask
Build Sankshep.ai, one platform that turns an official document into every format and language that citizens and officials need, for the Seva First Innovation Challenge (Track 2: Open Innovation).

## Why it matters
Circulars, advisories and scheme guidelines only help when people understand them. Today every version is rewritten by hand: a summary for officials, a simple explanation for citizens, a post, a meeting deck, a video script. It is slow, it needs writing and translation skills, and the facts drift between versions.

## Who it serves
- Communication and IEC officers, PHC staff, panchayat and municipal staff, NGOs, and disaster and cyber-safety teams.
- Through them, citizens who need information in their own language and in plain words.

## What the prototype does
- Takes a PDF, Word file, image, web link or pasted text as the source.
- Drafts up to 10 formats at once, for the audience and tone you choose.
- Translates into English and 12 Indian languages, from Hindi and Bengali to Urdu and Assamese.
- Runs entirely on the user's computer in Private mode, for confidential files.

## Decision needed
Pick one department's recent advisories as pilot sources, and agree who checks the drafts before they go out.`,

  news: `## One document, every version: Sankshep.ai drafts official notices for citizens
**An entry in the Seva First Innovation Challenge turns one circular into summaries, decks, scripts and translations in 12 Indian languages at once**

[Place], [Date]: A team in the Seva First Innovation Challenge (SFIC) has built Sankshep.ai, a web prototype that turns one official document into every version that officials and citizens need, all drafted together.

Today the same circular is rewritten by hand into a summary for officials, a simple explanation for citizens, a social media post, a meeting deck and a video script. District offices and NGOs rarely have communication staff, so information often goes out late, in English only, or in official language that many citizens cannot follow.

With Sankshep.ai, staff add a PDF, Word file, image, web link or pasted text, pick the formats they need, and set the audience and tone. Text can also be translated into English and 12 Indian languages, including Hindi, Bengali, Tamil, Urdu and Assamese.

For confidential files, Private mode runs the AI on the user's own computer, so the document never leaves the office.

The prototype is meant for IEC officers, health workers and PHC staff, panchayat and municipal staff, NGOs, and disaster management and cyber-safety teams.`,

  deck: `## Slide 1: One circular, every citizen
Sankshep.ai · Seva First Innovation Challenge · Track 2: Open Innovation

## Slide 2: The problem
- Every version of an official document is rewritten by hand
- It goes out late, in English only, or in hard official language

## Slide 3: Who it serves
- IEC officers, PHC staff, panchayats, NGOs and safety teams
- And through them, every citizen

## Slide 4: What Sankshep does
- One source in, up to 10 formats out, drafted in parallel
- Translation into English and 12 Indian languages

## Slide 5: Safe for sensitive files
- Private mode runs the AI on the user's own computer
- Confidential documents never leave the device`,
}

/** The News Article draft after the pointer asks for REFINE_PROMPT. */
export const NEWS_REFINED = `## One document, every version: Sankshep.ai drafts official notices for citizens

[Place], [Date]: A team in the Seva First Innovation Challenge (SFIC) has built Sankshep.ai, a web prototype that turns one official document into summaries, decks, scripts and translations, all drafted together.

Today each version is rewritten by hand, so information often reaches citizens late, in English only, or in hard official language. Sankshep.ai drafts them from one source, in English and 12 Indian languages when needed.

For confidential files, Private mode runs the AI on the user's own computer, so the document never leaves the office.`

const DATE = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
const TIME = new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false })

/** History's stamp: "Oct 18, 2026 • 14:32", from the moment the demo generated. */
export const formatStamp = (ms: number) => ({ date: DATE.format(ms), time: TIME.format(ms) })
