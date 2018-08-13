let observer
let config = {
  attributes: true,
  childList: true,
  subtree: true,
  characterData: true,
  characterDataOldValue: true
}

export default {
  bind (el, binding) {
    const { value } = binding
    if (!value) return console.warn('vue-mutation-observer: "Please set callback or config object."')
    const cb = (typeof value === 'function' && value) || value.callback
    observer = new MutationObserver(cb)
  },
  inserted (el, binding) {
    const { value, modifiers, arg } = binding
    let currentConfig = {}
    for (let modifier of Object.keys(modifiers)) {
      switch (modifier) {
        case 'characterData':
          currentConfig = Object.assign(
            currentConfig,
            { 
              characterData: true,
              characterDataOldValue: true 
            }
          )
          break
        case 'attributes':
          currentConfig = Object.assign(
            currentConfig,
            {
              attributes: true,
              attributeOldValue: true
            }
          )
          break
        case 'childList':
          currentConfig = Object.assign(
            currentConfig,
            { childList: true }
          )
          break
        default:
          console.warn(`vue-mutation-observer: "Unknown modifier: ${modifier}."`)
      }
    }
    currentConfig.subtree = !!arg && arg === 'subtree'
    if (value.config) currentConfig = Object.assign(currentConfig, value.config)
    console.log(currentConfig)
    try {
      observer.observe(el, (Object.keys(currentConfig).length !== 0 && currentConfig) || config)
    } catch (err) {
      console.error(`vue-mutation-observer: "${err}."`)
    }
  }
}
