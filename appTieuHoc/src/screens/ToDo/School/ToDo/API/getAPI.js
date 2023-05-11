const API =
  'https://api-elb.onluyen.vn/api/practice/questions/detail/63f57c78a5518b5fdc2be205/';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6Imh1bmdodDU0QG9ubHV5ZW4udm4iLCJzdWIiOiJodW5naHQ1NEBvbmx1eWVuLnZuIiwidXNlcklkIjoiNjQzZmIzOWIzNzNhZWNiMzQ2MjIzMjFkIiwidXNlck5hbWUiOiJodW5naHQ1NEBvbmx1eWVuLnZuIiwiaXNWZXJpZmllZCI6ZmFsc2UsIkdyYWRlSWQiOiJDMyIsIkRpc3BsYXlOYW1lIjoiSMOAIFRV4bqkTiBIw5lOR2ciLCJCaXJ0aGRheSI6IjIwMTAtMDUtMTIiLCJQcm92aW5jZUlkIjo2NSwiRGlzdHJpY3RJZCI6MTUsIlNjaG9vbFllYXIiOjIwMjIsImNvZGVBcHAiOiJTQ0hPT0wiLCJwYXJ0bmVyIjoiT05MVVlFTiIsIlJvbGUiOiJTVFVERU5UIiwiR2VuZGVyIjoiTkFNIiwiQ3VycmVudFNjaG9vbElkIjozLCJDcmVhdGVCeVNjaG9vbCI6MywiU2Nob29sSWQiOjMsInByZW1pdW0iOmZhbHNlLCJjYW5DaGFuZ2VQYXNzd29yZCI6dHJ1ZSwiTXVsdGlwbGVTY2hvb2wiOmZhbHNlLCJwYWNrYWdlcyI6IjU1Nzk1IiwianRpIjoiZDQ0MzYxYzctYzM3My00ZThhLTg0MzMtZjdkMjYyOTk1NDVkIiwiaWF0IjoxNjgzNzAxOTY2LCJuYmYiOjE2ODM3MDE5NjYsImV4cCI6MTY4MzcxMjc2NiwiaXNzIjoiRURNSUNSTyIsImF1ZCI6Ik9OTFVZRU4uVk4ifQ.3jOeIx-iv-k9UVxWg7ulpyG6IKaJ-hoIJWDpxpRs1-Y';

export const sendAnswer = async payload => {
  const uri = `https://api-elb.onluyen.vn/api/practice/questions/sendanswer`;
  const body = {
    dataOptionId: [],
    dataOptionText: [payload.dataOptionText],
    isSkip: payload.isSkip,
    problemId: payload.problemId,
    stepId: payload.stepId,
    studentDoRight: null,
    testId: '',
    textAnswer: '',
  };
  console.log('bodyRequest:', body);
  const response = await fetch(uri, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
      Referer: 'https://tieuhoc.onluyen.vn/',
    },
    body: JSON.stringify(body),
  });
  return await response.json();
};

export const getNextQuestionApi = async payload => {
  const uri = API + `${payload.nextStepId}`;
  const response = await fetch(uri, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
  });
  return await response.json();
};
