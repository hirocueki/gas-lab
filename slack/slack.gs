function postSlack(slackWebhookUrl) {
  var payload = JSON.stringify({text: 'message' });
  var res =  UrlFetchApp.fetch(slackWebhookUrl, {
    method: 'POST,
    headers: { "Content-Type": 'application/json' },
    payload: payload
  });
}
