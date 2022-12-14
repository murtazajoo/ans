let htmlElement = document.getElementById("main");
let finalHtml = "";
const queryString = window.location.search;
const parameters = new URLSearchParams(queryString);
const value = parameters.get("s");
const subject = eval(value);
document.title = `idea-${subject}`;
document.getElementById("sub").innerText = value.toLowerCase();
document.getElementById("heading").innerText = value.toUpperCase();
let extentions = ["jpeg", "jpg", "png"];
subject.map((e) => {
  finalHtml += `<div class="line"> </div> <div class="sub-heading new-sub-heading"><h3>${e.name}</h3></div>`;
  for (let i = 0; i < e.data.length; i++) {
    let question = e.data[i].question;
    let answer = e.data[i].answer;
    let id = question.replace(/\W/g, "");

    finalHtml += `<div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-${id}">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" 
      data-bs-target="#flush-${id}-collapse" aria-expanded="false" aria-controls="flush-${id}-collapse">
        ${question}
      </button>
    </h2>
    <div id="flush-${id}-collapse" class="accordion-collapse collapse" aria-labelledby="flush-${id}" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body center">
        ${
          extentions.some((el) => answer.includes(el))
            ? `<img src="${answer}">`
            : answer
        }
  </div>
    </div>
  </div>`;
  }
});

htmlElement.innerHTML = finalHtml;
