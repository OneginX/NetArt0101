deepai.setApiKey("5401f6bc-c32e-44f4-bb9c-145a61198ab3");

// async function runLine1() {
//   var checkedValue = document.querySelector(".messageCheckbox:checked").value;
//   var line1Content = document.getElementById("line1").value;
//   var resp = await deepai.callStandardApi(`${checkedValue}`, {
//     text: `${line1Content}`,
//   });
//   console.log(resp);
//   document.getElementById("img1").src = resp.output_url;
// }

// async function runLine2() {
//   var checkedValue = document.querySelector(".messageCheckbox:checked").value;
//   var line2Content = document.getElementById("line2").value;
//   var resp = await deepai.callStandardApi(`${checkedValue}`, {
//     text: `${line2Content}`,
//   });
//   console.log(resp);
//   document.getElementById("img2").src = resp.output_url;
// }

// async function runLine3() {
//   var checkedValue = document.querySelector(".messageCheckbox:checked").value;
//   var line3Content = document.getElementById("line3").value;
//   var resp = await deepai.callStandardApi(`${checkedValue}`, {
//     text: `${line3Content}`,
//   });
//   console.log(resp);
//   document.getElementById("img3").src = resp.output_url;
// }
function close2() {
  document.getElementById("pop").style.visibility = "hidden";
}

async function runAPI() {
  var count = document.querySelectorAll("input[type=text]").length;
  var checkedValue = document.querySelector(".messageCheckbox:checked").value;
  var line1Content = document.getElementById("line1").value;
  var line2Content = document.getElementById("line2").value;
  var line3Content = document.getElementById("line3").value;
  var resp1 = await deepai.callStandardApi(`${checkedValue}`, {
    grid_size: "1",
    text: `${line1Content}`,
  });
  var resp2 = await deepai.callStandardApi(`${checkedValue}`, {
    grid_size: "1",
    text: `${line2Content}`,
  });
  var resp3 = await deepai.callStandardApi(`${checkedValue}`, {
    grid_size: "1",
    text: `${line3Content}`,
  });
  console.log(resp1);
  console.log(resp2);
  console.log(resp3);
  document.getElementById("textbox1").textContent = line1Content;
  document.getElementById("textbox2").textContent = line2Content;
  document.getElementById("textbox3").textContent = line3Content;
  document.getElementById("img1").src = resp1.output_url;
  document.getElementById("img2").src = resp2.output_url;
  document.getElementById("img3").src = resp3.output_url;

  console.log(count);
}
