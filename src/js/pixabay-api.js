export function userRequest(userSearch) {
    const BASE_URL = 'https://pixabay.com';
    const END_POINT = '/api/';
    const param = new URLSearchParams({
      key: '44700012-753277454e0fe08e62d6e3109',
      q: `${userSearch}`,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    });
    const url = `${BASE_URL}${END_POINT}?${param}`;
    return fetch(url)
      .then(res => res.json())
      .catch(err => {
        console.log(err);
      });
  }