function chat(prompt){

  const baseUrl = "https://api.openai.com";
  const endpoint = "/v1/completions";
  const url = baseUrl + endpoint;
  const apiKey = "YOUR-API-KEY";
  const orgCode = "YOUR-ORG-CODE";

  const headers = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${apiKey}`,
    "OpenAI-Organization": orgCode
  }

  const payload = {
    "model": "text-davinci-003",
    "prompt": prompt,
    "temperature": 0.5,
    "max_tokens": 2048
  }

  const options = {
    "muteHttpExceptions": true,
    "method": "POST",
    "headers": headers,
    "payload": JSON.stringify(payload)
  }

  const response = JSON.parse(UrlFetchApp.fetch(url, options));
  Logger.log((response["choices"][0]["text"]).replace(/\n/g,''));

}


function testChat(){
  chat("Who is the President of the USA?");
}




