// Image protection utilities
export const protectImages = () => {
  // Disable right-click on images
  document.addEventListener('contextmenu', (e) => {
    if (e.target.tagName === 'IMG') {
      e.preventDefault();
    }
  });

  // Disable drag and drop on images
  document.addEventListener('dragstart', (e) => {
    if (e.target.tagName === 'IMG') {
      e.preventDefault();
    }
  });

  // Disable keyboard shortcuts for copying
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && (e.key === 'c' || e.key === 'u' || e.key === 's')) {
      if (e.target.tagName === 'IMG' || document.activeElement.tagName === 'IMG') {
        e.preventDefault();
      }
    }
  });
};

export const addWatermark = (imageUrl, watermarkText) => {
  // This would need to be implemented server-side or with canvas
  // For client-side, you'd need to load the image, draw it on canvas, add text, then export
  return imageUrl; // Placeholder
};