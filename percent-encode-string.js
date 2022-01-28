const urlEncode = function(text) {
  let trimText = text.trim();
  let urlText = trimText.split(" ").join("%20");
  return urlText;
};
console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode("blue is greener than purple for sure"));