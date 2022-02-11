/**
 * Return a Promise that will be resolved after a delay time.
 * @param time delay time (ms), default is 0
 * @returns void
 */
export function delay(time = 0) {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}

/**
 * Scroll to top.
 * @param delayTime delay time (ms), default is 0
 */
export async function scrollToTop(delayTime = 0) {
  await delay(delayTime)
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: 'smooth',
  })
}

/**
 * Scroll to the an HTML element.
 * @param elementOrSelector an HTML element or a CSS selector
 * @param delayTime delay time (ms), default is 0
 * @returns success or not
 */
export async function scrollToElement(elementOrSelector: HTMLElement | string, delayTime = 0) {
  let element: HTMLElement | null = null
  if (typeof elementOrSelector === 'string')
    element = document.querySelector(elementOrSelector)
  else
    element = elementOrSelector
  if (element) {
    await delay(delayTime)
    element.scrollIntoView({ behavior: 'smooth' })
    return true
  }
  return false
}
