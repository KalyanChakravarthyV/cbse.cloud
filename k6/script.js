import http from 'k6/http';
import { randomString, randomItem,randomIntBetween } from 'https://jslib.k6.io/k6-utils/1.2.0/index.js';
import { sleep } from 'k6';


// export const options = {
//   vus: 100,
//   duration: '30m'//'5m30s',
// };

//const maxItemRes = http.get(`https://hacker-news.firebaseio.com/v0/maxitem.json`, {
//  headers: { 'Content-Type': 'application/json' },
//});


let maxItemId = undefined;//maxItemRes.json();

if(maxItemId === undefined) maxItemId = 35753924;


const url = 'https://elastic.cbse.cloud/ncert/_search';

export default function () {

  let randomItem = randomIntBetween(34999999,maxItemId)

  let hackerNewsItem = http.get(`https://hacker-news.firebaseio.com/v0/item/${randomItem}.json`,{
      headers: { 'Content-Type': 'application/json' },
    });

  let randomSearchString = hackerNewsItem.json().text + '';//.substring(0,10);


  let data = {"query":{"match":{"data":{"query":randomSearchString}}},"highlight":{"pre_tags":["<bold><em>"],"post_tags":["</em></bold>"],"fields":{"data":{}}},"fields":["classNum","class","pageNumber","subjectName","chapter","pdfUrl"],"_source":false}


  // Using a JSON string as body
  let res = http.post(url, JSON.stringify(data), {headers: { 'Content-Type': 'application/json' }});
 


  if(res.json() === undefined)
   console.error(res); // ~21 ms
  else
   console.log(`Searched ${randomSearchString}: results ${res.json().hits.total.value}`)

  sleep(1);
}