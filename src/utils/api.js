/* 
It is not recommended to store secret keys in this way, but it's better than making them constants. 
I would recommend a lightweight back end with node/express to make the pixaby call 
*/
const API_KEY = process.env.REACT_APP_PIXABAY_API_KEY;
const API_PATH = process.env.REACT_APP_PIXABAY_API_PATH;
const PER_PAGE_DEFAULT = 10;

export async function getSearchResults(
  query = "",
  category = "",
  savedImages = [],
  per_page = PER_PAGE_DEFAULT
) {
  let apiParameters = `?key=${API_KEY}&per_page=${per_page}`;
  if (query) {
    apiParameters += `&q=${encodeURI(query.trim().toLowerCase())}`;
  }

  if (category) {
    apiParameters += `&category=${category}`;
  }

  const response = await fetch(`${API_PATH}/${apiParameters}`);

  if (response.ok) {
    const data = await response.json();
    if (data.totalHits === 0) {
      data.msg = "No images were found";
      throw data;
    }
    if (savedImages.length) {
      return transformSaved(savedImages, data.hits);
    }
    return data.hits;
  } else {
    throw response.status;
  }
}

export async function getImage(id) {
  const apiParameters = `?key=${API_KEY}&id=${id}`;

  const response = await fetch(`${API_PATH}/${apiParameters}`);

  if (response.ok) {
    const data = await response.json();
    if (data.totalHits === 0) {
      data.msg = "No images were found";
      throw data;
    }
    return data.hits;
  } else {
    throw response.status;
  }
}

function transformSaved(savedImageIds, incomingImages) {
  return incomingImages.map(image => {
    if (savedImageIds.includes(image.id.toString())) {
      image.saved = true;
    }
    return image;
  });
}
