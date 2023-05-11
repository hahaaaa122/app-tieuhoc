export const renderQuestion = (question) => {
    let html = '';
        html += `
        <div style="overflow:auto;
        padding: 10px 15px;border-bottom: 1px solid #eaeaea"">
            ${question} 
          </div>`;

    return html;
}

