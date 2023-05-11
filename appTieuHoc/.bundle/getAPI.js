import axios from 'axios';

export default getAPI = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        'https://api-elb.onluyen.vn/api/school-online/assignment/doing/643fb467685ed6b1cc78c467',{
            headers:{
                "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6Imh1bmdodDU0QG9ubHV5ZW4udm4iLCJzdWIiOiJodW5naHQ1NEBvbmx1eWVuLnZuIiwidXNlcklkIjoiNjQzZmIzOWIzNzNhZWNiMzQ2MjIzMjFkIiwidXNlck5hbWUiOiJodW5naHQ1NEBvbmx1eWVuLnZuIiwiaXNWZXJpZmllZCI6ZmFsc2UsIkdyYWRlSWQiOiJDMyIsIkRpc3BsYXlOYW1lIjoiSMOAIFRV4bqkTiBIw5lOR2ciLCJCaXJ0aGRheSI6IjIwMTAtMDUtMTIiLCJQcm92aW5jZUlkIjo2NSwiRGlzdHJpY3RJZCI6MTUsIlNjaG9vbFllYXIiOjIwMjIsImNvZGVBcHAiOiJTQ0hPT0wiLCJwYXJ0bmVyIjoiT05MVVlFTiIsIlJvbGUiOiJTVFVERU5UIiwiR2VuZGVyIjoiTkFNIiwiQ3VycmVudFNjaG9vbElkIjozLCJDcmVhdGVCeVNjaG9vbCI6MywiU2Nob29sSWQiOjMsInByZW1pdW0iOmZhbHNlLCJjYW5DaGFuZ2VQYXNzd29yZCI6dHJ1ZSwiTXVsdGlwbGVTY2hvb2wiOmZhbHNlLCJwYWNrYWdlcyI6IjU1Nzk1IiwianRpIjoiNDIxMjFhMzQtNWI5MC00MDU5LWIwZWYtNTBjZDA4Yzg3MTY0IiwiaWF0IjoxNjgyNDA0OTM1LCJuYmYiOjE2ODI0MDQ5MzUsImV4cCI6MTY4MjQxNTczNSwiaXNzIjoiRURNSUNSTyIsImF1ZCI6Ik9OTFVZRU4uVk4ifQ.eROn6esPiLW11Nwr3VZvNA75E07iGPHyHUM-hBNzgUU"
            }
        }
      )
      .then(function (res) {
        console.log('CallAPI',res);
        resolve(res.data);
      })
      .catch(function (err) {
        console.log(err);
        reject(err);
      });
  });
};
