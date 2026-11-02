import type { CONTACT_COPY } from '../../pages/ContactPage'

const hi: typeof CONTACT_COPY.en = {
  eyebrow: 'ಸಂಪರ್ಕ',
  title: 'ಇದನ್ನು ತಯಾರಿಸಿದವರೊಂದಿಗೆ ಮಾತನಾಡಿ.',
  lead: 'Sankshep.ai, ಇದರ ಕೋಡ್ ಅಥವಾ ನಮ್ಮ SFIC ಪ್ರಾಜೆಕ್ಟ್ (ಅಧಿಕೃತ ತಂಡದ ಕೋಡ್: TM003665) ಬಗ್ಗೆ ಯಾವುದೇ ಪ್ರಶ್ನೆ ಇದೆಯೇ? ನಮ್ಮಲ್ಲಿ ಯಾರಾದರೂ ಒಬ್ಬರಿಗೆ ನೇರವಾಗಿ ಬರೆಯಿರಿ, ಅಥವಾ GitHub ನಲ್ಲಿ ಒಂದು issue ತೆರೆಯಿರಿ.',
  contactsLabel: 'ತಂಡದ ಸಂಪರ್ಕ',
  bugTitle: 'ಯಾವುದಾದರೂ ಬಗ್ ಸಿಕ್ಕಿದೆಯೇ ಅಥವಾ ಸಲಹೆ ಇದೆಯೇ?',
  bugBody: 'ರಿಪೋಸಿಟರಿಯಲ್ಲಿರುವ issue ಮತ್ತು pull request ಎರಡೂ ಒಟ್ಟಿಗೆ ಇಡೀ ತಂಡಕ್ಕೆ ತಲುಪುತ್ತವೆ.',
  openIssue: 'Issue ತೆರೆಯಿರಿ',
  aboutProject: 'ಪ್ರಾಜೆಕ್ಟ್ ಬಗ್ಗೆ',
  onGithub: (name: string) => `GitHub ನಲ್ಲಿ ${name}`,
  onLinkedin: (name: string) => `LinkedIn ನಲ್ಲಿ ${name}`,
  viewProfile: 'ಪ್ರೊಫೈಲ್ ನೋಡಿ',
  email: 'ಇಮೇಲ್',
  emailName: (name: string) => `${name}ಗೆ ಇಮೇಲ್ ಮಾಡಿ`,
  copyLabel: (name: string) => `${name} ಅವರ ಇಮೇಲ್ ವಿಳಾಸವನ್ನು ಕಾಪಿ ಮಾಡಿ`,
  copiedLabel: 'ಇಮೇಲ್ ವಿಳಾಸ ಕಾಪಿ ಆಗಿದೆ',
  copyTitle: 'ವಿಳಾಸ ಕಾಪಿ ಮಾಡಿ',
  copiedTitle: 'ಕಾಪಿ ಆಗಿದೆ',
  copiedStatus: (email: string) => `${email} ಕಾಪಿ ಆಗಿದೆ`,
}

const t: typeof CONTACT_COPY.en = {
  eyebrow: 'ಸಂಪರ್ಕ',
  title: 'ಇದನ್ನು ನಿರ್ಮಿಸಿದವರೊಂದಿಗೆ ಮಾತನಾಡಿ.',
  lead: 'Sankshep.ai, ಕೋಡ್ ಅಥವಾ ನಮ್ಮ SFIC ನಮೂದು (ಅಧಿಕೃತ ತಂಡದ ಕೋಡ್: TM003665) ಕುರಿತು ಪ್ರಶ್ನೆಗಳಿವೆಯೇ? ನಮ್ಮಲ್ಲಿ ಯಾರಿಗಾದರೂ ನೇರವಾಗಿ ಬರೆಯಿರಿ ಅಥವಾ GitHub ನಲ್ಲಿ ಒಂದು issue ತೆರೆಯಿರಿ.',
  contactsLabel: 'ತಂಡದ ಸಂಪರ್ಕಗಳು',
  bugTitle: 'ಯಾವುದಾದರೂ ದೋಷ (bug) ಕಂಡುಬಂದಿದೆಯೇ ಅಥವಾ ಸಲಹೆ ಇದೆಯೇ?',
  bugBody: 'ರೆಪೊಸಿಟರಿಯಲ್ಲಿನ issues ಮತ್ತು pull requests ಏಕಕಾಲದಲ್ಲಿ ಇಡೀ ತಂಡವನ್ನು ತಲುಪುತ್ತವೆ.',
  openIssue: 'Issue ತೆರೆಯಿರಿ',
  aboutProject: 'ಯೋಜನೆಯ ಬಗ್ಗೆ',
  onGithub: (name: string) => `GitHub ನಲ್ಲಿ ${name}`,
  onLinkedin: (name: string) => `LinkedIn ನಲ್ಲಿ ${name}`,
  viewProfile: 'ಪ್ರೊಫೈಲ್ ವೀಕ್ಷಿಸಿ',
  email: 'ಇಮೇಲ್',
  emailName: (name: string) => `${name} ಅವರಿಗೆ ಇಮೇಲ್ ಕಳುಹಿಸಿ`,
  copyLabel: (name: string) => `${name} ಅವರ ಇಮೇಲ್ ವಿಳಾಸವನ್ನು ನಕಲಿಸಿ`,
  copiedLabel: 'ಇಮೇಲ್ ವಿಳಾಸವನ್ನು ನಕಲಿಸಲಾಗಿದೆ',
  copyTitle: 'ವಿಳಾಸ ನಕಲಿಸಿ',
  copiedTitle: 'ನಕಲಿಸಲಾಗಿದೆ',
  copiedStatus: (email: string) => `${email} ನಕಲಿಸಲಾಗಿದೆ`,
}

export default t
