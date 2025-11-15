// Force light mode by overriding Starlight's theme system
(function() {
  // Set the theme to light immediately
  document.documentElement.setAttribute('data-theme', 'light');
  
  // Override localStorage to always return 'light'
  const originalSetItem = localStorage.setItem;
  const originalGetItem = localStorage.getItem;
  
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
  
  // Set initial theme
  localStorage.setItem('starlight-theme', 'light');
  
  // Watch for theme changes and force back to light
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
})();

