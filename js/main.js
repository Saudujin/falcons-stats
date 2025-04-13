
const fallbackThumbnails = {
  "banderitax": "https://yt3.googleusercontent.com/banderitax=s176-c-k-c0x00ffffff-no-rj",
  "3adeil": "https://yt3.googleusercontent.com/3adeil=s176-c-k-c0x00ffffff-no-rj",
  "mrlle99": "https://yt3.googleusercontent.com/mrlle99=s176-c-k-c0x00ffffff-no-rj",
  "opiilz": "https://yt3.googleusercontent.com/opiilz=s176-c-k-c0x00ffffff-no-rj",
  "abuabeer16": "https://yt3.googleusercontent.com/abuabeer16=s176-c-k-c0x00ffffff-no-rj",
  "aziz14": "https://yt3.googleusercontent.com/aziz14=s176-c-k-c0x00ffffff-no-rj",
  "bo3omar22": "https://yt3.googleusercontent.com/bo3omar22=s176-c-k-c0x00ffffff-no-rj",
  "raed.1": "https://yt3.googleusercontent.com/raed.1=s176-c-k-c0x00ffffff-no-rj",
  "saudcast": "https://yt3.googleusercontent.com/saudcast=s176-c-k-c0x00ffffff-no-rj",
  "fzx": "https://yt3.googleusercontent.com/fzx=s176-c-k-c0x00ffffff-no-rj",
  "mohammed-oden": "https://yt3.googleusercontent.com/mohammed-oden=s176-c-k-c0x00ffffff-no-rj",
  "xsma333": "https://yt3.googleusercontent.com/xsma333=s176-c-k-c0x00ffffff-no-rj",
  "drb7h": "https://yt3.googleusercontent.com/drb7h=s176-c-k-c0x00ffffff-no-rj"
};

function getFallbackThumbnail(handle) {
  return fallbackThumbnails[handle.toLowerCase()] || '';
}

// ... rest of your original main.js logic goes here.
// NOTE: You should inject the fallback thumbnail into wherever you assign the thumbnail in the render code
