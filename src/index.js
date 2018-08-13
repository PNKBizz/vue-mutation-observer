import mutationObserver from './observer';

const install = function(Vue) {
  Vue.directive('observer', mutationObserver);
};

mutationObserver.install = install;

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(mutationObserver)
}

export const observer = mutationObserver;

export default mutationObserver;