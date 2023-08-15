import fetch from "node-fetch";
import dotenv from "dotenv"
import { readFileSync } from "fs";

dotenv.config()

const serviceList = readFileSync("./azure-services.txt", "utf8").toString()

export default async function query(question) {
  const url = process.env.OPEN_AI_ENDPOINT

  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "api-key": process.env.OPEN_AI_KEY
    },
    body: JSON.stringify({
      messages: [
        {
          role: "system",
          content: `You are an AI assistant that helps people to determine if Azure Services are approved for use or not.
The list of services is given below.
Only services in this last can be used.
If you are not sure, say that you do not know.
If an unrelated question is asked, respond that you can only advise on the use of Azure services.
---
${serviceList}
            `,
        },
        {
          role: "user",
          content: question,
        },
      ],
      max_tokens: 800,
      temperature: 0.7,
      frequency_penalty: 0,
      presence_penalty: 0,
      top_p: 0.95,
      stop: null
    }),
  };

  const response = await fetch(url, options);
  const json = await response.json();
  return json.choices[0].message.content;
}


