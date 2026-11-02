import { Link } from 'react-router-dom'
import { MotionConfig, motion } from 'motion/react'
import type { ReactNode } from 'react'
import { ArrowRight, GITHUB_URL, GithubIcon, SitePage } from '../../components/site/SiteChrome'
import { defineCopy, useCopy } from '../../i18n'
import type { ABOUT_COPY } from '../../pages/AboutPage'

const Strong = ({ children }: { children: ReactNode }) => <strong className="font-semibold text-ink">{children}</strong>

const t: typeof ABOUT_COPY.en = {
  eyebrow: 'ഞങ്ങളെക്കുറിച്ച്',
  intro: <>ഞങ്ങൾ Sankshep.ai നിർമ്മിക്കുന്നത് <Strong>Seva First Innovation Challenge (SFIC)</Strong>, ട്രാക്ക് 2: ഓപ്പൺ ഇന്നൊവേഷൻ എന്ന വിഭാഗത്തിന് വേണ്ടിയാണ്. ഇതൊരു വർക്ക്സ്പേസാണ്, ഇത് ഒരൊറ്റ ഉറവിട രേഖയെ ആളുകൾക്ക് യഥാർത്ഥത്തിൽ ആവശ്യമുള്ള ഫോർമാറ്റുകളിലേക്കും ഭാഷകളിലേക്കും മാറ്റുന്നു. ഔദ്യോഗിക ടീം കോഡ്: <Strong>TM003665</Strong>.</>,
  problemLabel: 'SFIC പ്രശ്ന വിവരണ പ്രസ്താവന',
  problem: '“സർക്കാർ, പൊതുസേവന വിവരങ്ങൾ ഓരോ പൗരനും തയ്യാറായ ആശയവിനിമയമാക്കി മാറ്റുക, എല്ലാ ഫോർമാറ്റിലും ഭാഷയിലും”',
  why: [
    'വാർത്തകൾ, റിപ്പോർട്ടുകൾ, ഉപദേശങ്ങൾ, നയരേഖകൾ, ഗവേഷണങ്ങൾ എന്നിവ ബ്രീഫുകൾ, പോസ്റ്റുകൾ, ഡെക്കുകൾ, സ്ക്രിപ്റ്റുകൾ എന്നിവയാക്കി മാറ്റാൻ സംഘടനകൾ മണിക്കൂറുകൾ ചെലവഴിക്കുന്നു. ഓരോ തവണയും ഉറവിടം വീണ്ടും വായിക്കേണ്ടി വരുന്നു, പ്രേക്ഷകർക്ക് എന്താണ് വേണ്ടതെന്ന് കണ്ടെത്തേണ്ടി വരുന്നു, എല്ലാം ആദ്യ മുതൽ എഴുതേണ്ടി വരുന്നു.',
    'Sankshep.ai അവർക്കായി ആ പണി ചെയ്യുന്നു. ഒരു രേഖ അപ്‌ലോഡ് ചെയ്യുക, ഫോർമാറ്റുകളും പ്രേക്ഷകരെയും തിരഞ്ഞെടുക്കുക, ഒരേ ഉറവിടത്തിൽ നിന്ന് എല്ലാ ഡ്രാഫ്റ്റുകളും ഒരേസമയം തയ്യാറാകുന്നു, പരിശോധിക്കാനും എഡിറ്റ് ചെയ്യാനും തയ്യാർ.',
  ],
  name: <><span className="font-semibold text-ink">എന്തുകൊണ്ട് “Sankshep”?</span> സംക്ഷേപ് (sankshep) എന്നാൽ ഹിന്ദിയിൽ “ചുരുക്കത്തിൽ” എന്നാണർത്ഥം.</>,
  team: 'ടീം',
  cta: 'അപ്‌ലോഡ് മുതൽ ഡ്രാഫ്റ്റ് വരെയുള്ള ഘട്ടങ്ങൾ കാണുക.',
  howItWorks: 'ഇത് എങ്ങനെ പ്രവർത്തിക്കുന്നു',
  readCode: 'കോഡ് വായിക്കുക',
}

export default t
