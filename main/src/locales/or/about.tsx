import type { ABOUT_COPY } from '../../pages/AboutPage'
import { Link } from 'react-router-dom'
import { MotionConfig, motion } from 'motion/react'
import type { ReactNode } from 'react'
import { ArrowRight, GITHUB_URL, GithubIcon, SitePage } from '../../components/site/SiteChrome'
import { defineCopy, useCopy } from '../../i18n'

const TEAM = ['Siddharth Devmurari', 'Suhani Jain', 'Harshit Vadher', 'Vraj Patel', 'Kalindi Purohit', 'Kalee Hindocha']

const EASE = [0.22, 1, 0.36, 1] as const

const Strong = ({ children }: { children: ReactNode }) => <strong className="font-semibold text-ink">{children}</strong>

const t: typeof ABOUT_COPY.en = {
  eyebrow: 'ଆମ ବିଷୟରେ',
  intro: <>ଆମେ Sankshep.ai କୁ <Strong>Seva First Innovation Challenge (SFIC)</Strong> ର ଟ୍ରାକ୍ 2: ଓପନ୍ ଇନୋଭେସନ୍ ପାଇଁ ତିଆରି କରୁଛୁ। ଏହା ଏକ ଏପରି ୱାର୍କସ୍ପେସ୍ ଯାହା ଗୋଟିଏ ମୂଳ ଡକ୍ୟୁମେଣ୍ଟ୍ କୁ ସେହି ସବୁ ଫର୍ମାଟ୍ ଏବଂ ଭାଷାରେ ପରିଣତ କରେ ଯାହା ଲୋକଙ୍କୁ ପ୍ରକୃତରେ ଆବଶ୍ୟକ ହୋଇଥାଏ। ସରକାରୀ ଟିମ୍ କୋଡ୍: <Strong>TM003665</Strong>।</>,
  problemLabel: 'SFIC ସମସ୍ୟା ବିବରଣୀ',
  problem: '“ବହୁ-ଫର୍ମାଟ ସାର୍ବଜନୀନ କଣ୍ଟେଣ୍ଟ ରୂପାନ୍ତରଣ ପାଇଁ ସ୍ୱୟଂଚାଳିତ GenAI ପ୍ଲାଟଫର୍ମ”',
  why: [
    'ଅନୁଷ୍ଠାନଗୁଡ଼ିକ ସମାଚାର, ରିପୋର୍ଟ, ପରାମର୍ଶ, ନୀତିଗତ ଡକ୍ୟୁମେଣ୍ଟ୍ ଏବଂ ଗବେଷଣାକୁ ବ୍ରିଫ୍, ପୋଷ୍ଟ, ଡେକ୍ ଏବଂ ସ୍କ୍ରିପ୍ଟରେ ପରିଣତ କରିବାରେ ଘଣ୍ଟା ଘଣ୍ଟା ସମୟ ବିତାନ୍ତି। ପ୍ରତିଥର ମୂଳ ଉତ୍ସକୁ ପୁଣି ପଢ଼ିବାକୁ ପଡ଼େ, ବୁଝିବାକୁ ପଡ଼େ ଯେ ଦର୍ଶକଙ୍କୁ କ’ଣ ଦରକାର, ଏବଂ ସବୁକିଛି ଆରମ୍ଭରୁ ଲେଖିବାକୁ ପଡ଼େ।',
    'Sankshep.ai ସେମାନଙ୍କ ପାଇଁ ଏହି କାମ କରିଥାଏ। ଏକ ଡକ୍ୟୁମେଣ୍ଟ୍ ଅପଲୋଡ୍ କରନ୍ତୁ, ଫର୍ମାଟ୍ ଏବଂ ପାଠକ ଚୟନ କରନ୍ତୁ, ଏବଂ ପ୍ରତ୍ୟେକ ଡ୍ରାଫ୍ଟ ସେହି ମୂଳ ଉତ୍ସରୁ ଏକସାଙ୍ଗରେ ଲେଖାଯାଇଥାଏ, ଯାଞ୍ଚ ଏବଂ ପରିବର୍ତ୍ତନ କରିବା ପାଇଁ ପ୍ରସ୍ତୁତ।',
  ],
  name: <><span className="font-semibold text-ink">“Sankshep” ନାମ କାହିଁକି?</span> ସଂକ୍ଷେପ ର ଅର୍ଥ ହେଉଛି “କମ୍ ଶବ୍ଦରେ”|</>,
  team: 'ଟିମ୍',
  cta: 'ଦେଖନ୍ତୁ, ଅପଲୋଡ୍ ରୁ ଡ୍ରାଫ୍ଟ ପର୍ଯ୍ୟନ୍ତ କ’ଣ ହୋଇଥାଏ।',
  howItWorks: 'ଏହା କିପରି କାମ କରେ',
  readCode: 'କୋଡ୍ ପଢ଼ନ୍ତୁ',
}

export default t
