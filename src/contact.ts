/** Real contact endpoints — update email when you have a preferred inbox */
export const CONTACT = {
  email: 'imxyanua205@gmail.com',
  github: 'https://github.com/imxyanua',
  mailtoSubject: 'xyanua — project inquiry',
} as const

export function mailtoHref(subject = CONTACT.mailtoSubject) {
  return `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}`
}
