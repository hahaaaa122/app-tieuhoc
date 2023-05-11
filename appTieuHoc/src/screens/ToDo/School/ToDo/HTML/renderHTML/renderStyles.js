export const renderStyles = () => {
  let html = '';
  html += `
        <style>
          .title{
            font-size:16;
            font-weight:700;
            line-height:130%;
            color:#2B4182
          }
          .line{
            font-size:16;
            font-weight:700;
            line-height:130%;
            color:#2B4182
          }
          .content{
            font-size:16;
            font-weight:700;
            line-height:130%;
            color:#2B4182
          }
         .play-audio {

            width: 9rem;
            height: 9rem;
            background-color: #e2e9ff;
            background-image: url(https://mathplay-library.s3.amazonaws.com/icon-speaker.svg),url(https://mathplay-library.s3.amazonaws.com/icon-wave.svg),url(https://mathplay-library.s3.amazonaws.com/icon-wave.svg);
            background-position: left 2rem center,left 5.1rem center,left 5.1rem center;
            background-size: 3rem,2rem,2rem;
            background-repeat: no-repeat;
            margin-right: 1rem;
            cursor: pointer;
            border-radius: 20px;
            box-shadow: #b8c9ff 0 5px;
            transition: all .1s ease;
            position: relative;
          }
         .play-audio-slow {
          width: 7rem;
          height: 7rem;
          background-color: #e2e9ff;
          background-image: url(https://mathplay-library.s3.amazonaws.com/icon-snail.svg),url(https://mathplay-library.s3.amazonaws.com/icon-wave.svg),url(https://mathplay-library.s3.amazonaws.com/icon-wave.svg);
          background-position: left 1.5rem center,left 4.6rem center,left 4.6rem center;
          background-size: 3rem,1rem,1rem;
          background-repeat: no-repeat;
          cursor: pointer;
          border-radius: 20px;
          box-shadow: #b8c9ff 0 5px;
          position: relative;
          transition: all .1s ease;
          }
          .content-audio {
            position: relative;
            margin: 1rem 0;
            display: flex;
            justify-content: center;
            align-items: flex-end;
          }
          .answer-input-audio input {
            margin-left:22%;
            border-width: 0px 0px 2px;
            border-color: #2b4182!important;
            color: #ff84a2!important;
            border-style: dashed;
            outline: none;
            text-align: center;
            font-size: 15px;
            min-width: 0.5rem!important;
        }
        .question{
            font-size:16;
            font-weight:900;
            color:#6D7FB3;
            display: flex;
            justify-content: space-between;
            margin:0 5px 20px 15px
        }
        .btn-bug{
         width: 110px;
         display: flex;
         align-items: center;
         justify-content: center;
         border: 1px dashed transparent;
         cursor: pointer;
         color: #6d7fb3;
         font-size:16;
         font-weight:700;
         margin-left: 10px;
         background-color:#ffff;
        }
        </style>`;

  return html;
};
