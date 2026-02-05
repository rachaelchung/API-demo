// Parse LRC format lyrics with timestamps
function parseLRC(lrcString) {
  const lines = lrcString.split('\n');
  const parsedLyrics = [];
  const timeRegex = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/;
  
  lines.forEach(line => {
    const match = line.match(timeRegex);
    
    if (match) {
      const minutes = parseInt(match[1]);
      const seconds = parseInt(match[2]);
      const milliseconds = parseInt(match[3]);
      const totalSeconds = minutes * 60 + seconds + milliseconds / 100;
      const text = line.replace(timeRegex, '').trim();
      
      if (text.length > 0) {
        parsedLyrics.push({
          time: totalSeconds,
          text: text
        });
      }
    }
  });
  
  return parsedLyrics;
}

// Save keepsake to gallery
function saveToGallery(keepsake) {
  let gallery = localStorage.getItem('cadenzas_gallery');
  
  if (gallery) {
    gallery = JSON.parse(gallery);
  } else {
    gallery = [];
  }
  
  gallery.push(keepsake);
  localStorage.setItem('cadenzas_gallery', JSON.stringify(gallery));
  
  console.log('Saved to anthology:', keepsake);
  console.log('Total items in anthology:', gallery.length);
}

// Get all keepsakes from gallery
function getGallery() {
  let gallery = localStorage.getItem('cadenzas_gallery');
  
  if (gallery) {
    gallery = JSON.parse(gallery);
  } else {
    gallery = [];
  }
  
  return gallery;
}

// Delete keepsake from gallery
function deleteFromGallery(index) {
  let gallery = getGallery();
  gallery.splice(index, 1);
  localStorage.setItem('cadenzas_gallery', JSON.stringify(gallery));
  console.log('Deleted keepsake at index:', index);
}
