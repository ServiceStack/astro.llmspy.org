// Force light mode by overriding Starlight's theme system
// This must run BEFORE any other scripts

// Immediately set theme to light before page renders
document.documentElement.setAttribute('data-theme', 'light');
document.documentElement.dataset.theme = 'light';

// Override localStorage BEFORE Starlight reads it
(function() {
  const originalSetItem = localStorage.setItem;
  const originalGetItem = localStorage.getItem;

  // Force theme to light in localStorage
  try {
    originalSetItem.call(localStorage, 'starlight-theme', 'light');
  } catch (e) {}

  localStorage.setItem = function(key, value) {
    if (key === 'starlight-theme') {
      return originalSetItem.call(this, key, 'light');
    }
    return originalSetItem.call(this, key, value);
  };

  localStorage.getItem = function(key) {
    if (key === 'starlight-theme') {
      return 'light';
    }
    return originalGetItem.call(this, key);
  };
})();

// Watch for any theme changes and force back to light
if (typeof MutationObserver !== 'undefined') {
  const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
        if (document.documentElement.getAttribute('data-theme') !== 'light') {
          document.documentElement.setAttribute('data-theme', 'light');
        }
      }
    });
  });

  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme']
  });
}

