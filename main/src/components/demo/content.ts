// What the demo works on. The source is the team's own SFIC problem statement, and every count shown
// in the mockup is computed from these strings.
import {
  AtSign, Briefcase, ChartPie, Clapperboard, FileText, Languages, Lightbulb, Newspaper, Presentation, ShieldAlert,
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
  { id: 'linkedin', label: 'LinkedIn Post', short: 'LinkedIn Post', desc: 'Up to 3,000 chars', icon: Briefcase },
  { id: 'x', label: 'Twitter/X Post', short: 'X / Twitter', desc: 'Hook + thread', icon: AtSign },
  { id: 'video', label: 'Video', short: 'Video', desc: 'Script & storyboard', icon: Clapperboard },
  { id: 'deck', label: 'PPT Presentation', short: 'Slide Deck', desc: 'Slides + notes', icon: Presentation },
  { id: 'blog', label: 'Blog Post', short: 'Blog Post', desc: 'SEO long-form', icon: Newspaper },
  { id: 'advisory', label: 'Advisory', short: 'Advisory', desc: 'Findings & actions', icon: ShieldAlert },
  { id: 'infographic', label: 'Infographic', short: 'Infographic', desc: 'Stats & layout', icon: ChartPie },
  { id: 'simple', label: 'Simplified Explanation', short: 'Simplified', desc: 'Plain language', icon: Lightbulb },
  { id: 'translation', label: 'Language Translation', short: 'Translation', desc: 'Indian languages', icon: Languages },
] as const

export type FormatId = (typeof FORMATS)[number]['id']
export const formatOf = (id: FormatId) => FORMATS.find((f) => f.id === id)!

/** The three formats the pointer picks. */
export const DEMO_FORMATS = ['exec', 'linkedin', 'deck'] as const satisfies readonly FormatId[]
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

export const REFINE_PROMPT = 'Shorter, end with one question'

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
- Translates into Hindi, Gujarati, Marathi, Bengali, Telugu and Tamil.
- Runs entirely on the user's computer in Private mode, for confidential files.

## Decision needed
Pick one department's recent advisories as pilot sources, and agree who checks the drafts before they go out.`,

  linkedin: `A single circular often has to become five things: a summary for officers, a simple note for citizens, a post, a meeting deck and a video script. Each one is written by hand, often only in English.

For the Seva First Innovation Challenge, we are building Sankshep.ai to do that step. Upload the document, pick the formats, set the audience and tone, and every version is drafted together, in Hindi and five more Indian languages if needed.

For confidential files, Private mode runs the AI on your own computer, so nothing leaves the office.

If you work in a department, a PHC or an NGO, which version of your next advisory would you hand off first?

#SevaFirst #GovTech #GenAI`,

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
- Translation into six Indian languages

## Slide 5: Safe for sensitive files
- Private mode runs the AI on the user's own computer
- Confidential documents never leave the device`,
}

/** The LinkedIn draft after the pointer asks for REFINE_PROMPT. */
export const LINKEDIN_REFINED = `One circular, five versions, each written by hand.

For the Seva First Innovation Challenge, we are building Sankshep.ai to draft them all from one document, in Hindi and five more Indian languages, with a Private mode for confidential files.

Which version would you hand off first?

#SevaFirst #GovTech`

const DATE = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
const TIME = new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false })

/** History's stamp: "Oct 18, 2026 • 14:32", from the moment the demo generated. */
export const formatStamp = (ms: number) => ({ date: DATE.format(ms), time: TIME.format(ms) })
