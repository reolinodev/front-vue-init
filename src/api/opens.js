import { opens } from './index';

function getOpenFoods(postData) {
  return opens.post('/food', postData);
}

function getOpenFood(placeId) {
  return opens.get('/food/' + placeId);
}

export { getOpenFoods, getOpenFood };
