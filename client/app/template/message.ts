/**
 * Created by giscafer on 2017/4/25.
 */


export function getAnswerMessageTmpl(userName: string, dateTime: string, message: string) {

  return `
<div class="msg-item clearfix">
  <div class="answer clearfix">
    <div class="answer-head">${userName}&nbsp;${dateTime}</div>
    <div class="view-content guid">
      <div class="guid-title">${message}</div>

    </div>
  </div>
</div>
`
}
export function getQuestionMessageTmpl(userName: string, dateTime: string, message: string) {

  return `
 <div id="msg1493010615946" class="msg-item clearfix msg-custom">
       <div class="question clearfix">
          <div class="answer-head">${userName}&nbsp;${dateTime}</div>

           <div class="view-content question-content">
               ${message}
           </div>
       </div>
 </div>
`
}
