deepai.setApiKey("5401f6bc-c32e-44f4-bb9c-145a61198ab3");

async function runAPI() {
  var line1Content = document.getElementById("line1").value;
  var resp = await deepai.callStandardApi("fantasy-world-generator", {
    text: `${line1Content}`,
  });
  console.log(resp);
  //   await open(resp.output_url);
  document.getElementById("img").src = resp.output_url;
}
// runAPI();

// async function() {
//   var resp = await deepai.callStandardApi("cyberpunk-generator", {
//           text: "YOUR_TEXT_HERE",
//   });
//   console.log(resp);
// }
