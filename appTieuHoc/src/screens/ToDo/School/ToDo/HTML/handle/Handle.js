export const Handle = () => {
  let html = '';
  html += `
        <div >
            <script>
                $(document).ready(function(){
                    $(".play-audio").click(function () {
                        let audioSource = $(this).attr("audio");
                        let audio = new Audio(audioSource);
                        audio.play();
                      });

                    $('input').on("change", function(){
                      let answer = $(this).val();
                      window.ReactNativeWebView.postMessage(answer);  
                    });

                    $('button').on("click", function(){
                      window.ReactNativeWebView.postMessage('true');  
                    });
                });

            </script>
        </div>`;

  return html;
};
