export const renderCourseware = (contentHtml) => {
    let html = '';
    if (contentHtml != '' && contentHtml != undefined) {
        html += `<div style="
        overflow:auto;
        padding: 10px 15px;border-bottom: 1px solid #eaeaea"
         class="q_material">
            ${contentHtml} 
          </div>`;
    }
    return html;
}
  // useEffect(() => {
  //   new Promise((resolve, reject) => {
  //     axios
  //       .get(
  //         'https://api-elb.onluyen.vn/api/practice/questions/detail/63f49c04456abec2d7baddf5/644659ce0638cfa50eeca26f',
  //         {
  //           headers: {
  //             Authorization:
  //               'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6Imh1bmdodDU0QG9ubHV5ZW4udm4iLCJzdWIiOiJodW5naHQ1NEBvbmx1eWVuLnZuIiwidXNlcklkIjoiNjQzZmIzOWIzNzNhZWNiMzQ2MjIzMjFkIiwidXNlck5hbWUiOiJodW5naHQ1NEBvbmx1eWVuLnZuIiwiaXNWZXJpZmllZCI6ZmFsc2UsIkdyYWRlSWQiOiJDMyIsIkRpc3BsYXlOYW1lIjoiSMOAIFRV4bqkTiBIw5lOR2ciLCJCaXJ0aGRheSI6IjIwMTAtMDUtMTIiLCJQcm92aW5jZUlkIjo2NSwiRGlzdHJpY3RJZCI6MTUsIlNjaG9vbFllYXIiOjIwMjIsImNvZGVBcHAiOiJTQ0hPT0wiLCJwYXJ0bmVyIjoiT05MVVlFTiIsIlJvbGUiOiJTVFVERU5UIiwiR2VuZGVyIjoiTkFNIiwiQ3VycmVudFNjaG9vbElkIjozLCJDcmVhdGVCeVNjaG9vbCI6MywiU2Nob29sSWQiOjMsInByZW1pdW0iOmZhbHNlLCJjYW5DaGFuZ2VQYXNzd29yZCI6dHJ1ZSwiTXVsdGlwbGVTY2hvb2wiOmZhbHNlLCJwYWNrYWdlcyI6IjU1Nzk1IiwianRpIjoiNDIxMjFhMzQtNWI5MC00MDU5LWIwZWYtNTBjZDA4Yzg3MTY0IiwiaWF0IjoxNjgyNDA0OTM1LCJuYmYiOjE2ODI0MDQ5MzUsImV4cCI6MTY4MjQxNTczNSwiaXNzIjoiRURNSUNSTyIsImF1ZCI6Ik9OTFVZRU4uVk4ifQ.eROn6esPiLW11Nwr3VZvNA75E07iGPHyHUM-hBNzgUU',
  //           },
  //         },
  //       )
  //       .then(function (res) {
  //         console.log('CallAPI', res);
  //         resolve(res.dataStandard);
  //       })
  //       .catch(function (err) {
  //         console.log(err);
  //         reject(err);
  //       });
  //   });
  // }, []);

import {
  getMathJaxScript,
  getJsSaveAnswer,
  getJsReplaceDataSrc,
  isSubjectMathJax,
  getScriptFillPreAnswer,
  getScriptFixAndroid,
} from "./WebUtils";
import mediaStyle from "./style/mediaStyle";
import { commonStyle, mathPlayStyle } from "./style/styles";
import { renderAppToWebView } from "./js/appToWeb";
import { getScriptWebToNative } from "./WebScriptNative";
import WebColor from "./WebColorConfig";
import { renderAudio } from "./media/audio";
import { getHeaders } from "./layout/header";
import { renderTextToSpeak } from "./layout/textToSpeak";
import { renderCourseware } from "./layout/courseware";
import { renderQuestion } from "./layout/question";
import { renderMultiChoice } from "./layout/multiChoices";
import { renderDisabledView } from "./layout/disabled";
import { renderExplain } from "./layout/explain";
import _ from "lodash";
import { getKidsStyle } from "./style/kidsStyle";
import { getKidsScript } from "./kidsJs";
import { getScriptAudio } from "./kidsJs/common";

const {
  bgColorActive,
  bgOptionTrue,
  bgOptionFalse,
  bgOptionActive,
  bgViewTrue,
  bgViewFalse,
  textReviewColor,
  borderButton,
  bgButtonColor,
  textVideoColor,
  borderColor,
} = WebColor;

/**
*
* HTML Practice
*/
const renderMathJaxPractice = ({
  data,
  subjectId,
  contentHtml,
  isPractice,
  isHideAnswer,
  isHideAnswerImg,
  allowClickNew,
  type,
}) => {
  const numberQuestion = data.questionNumber;
  const isBookmark = data.bookMarkStatus;
  const question = data.question;
  const index = data.index;

  let colorAnswer = "";
  if (data == "") return "";
  const countOptions = Object.keys(!!data.options && data.options).length;
  const urlMedia = data.urlMedia;
  let typeAnswer = data.typeAnswer;
  let typeView = data.typeView;
  let template = data.template;
  let userOptionText = data.userOptionText || [];
  let userOptionId = data.userOptionId || [];
  let answerFreeText = data.answerFreeText || [];
  let stepIndex = data.stepIndex;

  let html = ``;
  html += `
  <html>
    <head>
      <title>WebView</title>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      <meta HTTP-EQUIV="CACHE-CONTROL" CONTENT="NO-CACHE" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
      ${commonStyle}
      ${getKidsStyle(template, typeView)}
    </head>
    <body>`;
  html += renderAudio(urlMedia);
  html += `
        <div class="template-default template-${template}">
          <div class="container-fluid typeview-${typeView}" id="container-fluid">
            <div id="wrap-container" class="wrap-container">
            `;
  html += getHeaders({
      index,
      numberQuestion,
      isPractice,
      isBookmark,
      allowReviewSla: true,
      data,
      typeView,
      typeAnswer,
      template,
  });
  html += renderTextToSpeak(data.questionUrlSpeech);
  html += renderCourseware(contentHtml);
  html += renderQuestion(isHideAnswer, data.question, typeView, typeAnswer, template, stepIndex);
  html += renderMultiChoice(data, type, isHideAnswerImg, isHideAnswer, template);
  html += </div>; // wrap-container
  html += renderDisabledView(); // absolute
  html += </div>; // container-fluid
  html += renderExplain({ textReviewColor, textVideoColor, bgButtonColor, borderButton });
  html += <div id="blockBottom"></div>;
  html += `<div id="containerMain" class="flash-card">
            <div style="display:none;" id="flashcardId"></div>
            <div style="display:none;" id="flashcardVideo"></div>
          </div>
        </div>`;
  html += `<audio id="audio" controls="controls" style="display: none">
        <source id="audioSource" src=""></source>
        Your browser does not support the audio format.
      </audio>`;
  html += getScriptLibrary(subjectId);
  html += `${getMathJaxScript(subjectId, false)}
         ${renderAppToWebView({ countOptions, bgOptionFalse, bgOptionTrue, bgViewTrue, type })}
         ${getScriptWebToNative({ countOptions, bgColorActive, typeAnswer, colorAnswer, allowClickNew, template })}`;
  // html += getScriptEditor();
  // html += getTypeMathPlay({ typeView, question, typeAnswer, template, userOptionText });
  html += getJsSaveAnswer({ userOptionText, userOptionId, template, typeAnswer });
  html += getKidsScript(typeView, template, typeAnswer, answerFreeText, userOptionText);
  html += getJsReplaceDataSrc();
  html += getScriptAudio(data);
  html += getScriptFillPreAnswer(typeView, template, stepIndex);
  html += getScriptFixAndroid();
  html += `</body>
        </html> `;
  return html;
};

const getScriptLibrary = (subjectId) => {
  let html = "";
  html += `
  <script src="jquery.min.js"></script>
  <script src="jquery-ui.min.js"></script>
  <script src="jquery-pull-touch.js"></script>
`;
  if (isSubjectMathJax(subjectId)) {
      html += <script src="MathJax.min.js"></script>;
  }
  return html;
};

/**
*
* HTML MODAL EXPLAIN
*/
const renderReview = (mathJax, size, align = true, subjectId) => {
  const html = `
<html>
          <head>
            <meta charset="utf-8">
              <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no">
                <link rel="stylesheet" href="font47/css/font-awesome.min.css" >
                  ${headerStyle}
    ${getMathJaxScript(subjectId, false)}
  </head>
                <body>
                  ${mathJax}
                  <div style="display:none;" id="flashcardId"></div>
                  <div style="display:none;" id="flashcardVideo"></div>
                  <div style="display:none;" id="stepId"></div>
                  <div id="containerMain" style="position:absolute;top:0;bottom:0;right:0;left:0;background:rgba(0,0,0,0)"></div>
                  </body>
</html>`;
  return html;
};

module.exports = {
  renderMathJaxPractice,
  renderReview,
};

