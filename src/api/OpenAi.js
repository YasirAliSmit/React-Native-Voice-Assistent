import {apiKeys} from '../constants';
import axios from 'axios';
const chatGptEndPoint = 'https://api.openai.com/v1/completions';
const dalleEndPoint = 'https://api.openai.com/v1/images/generations';
const client = axios.create({
  headers: {
    "Authorization": "Bearer "+ apiKeys,
    "content-Type": "application/json",
  },
});
export const apiColl = async (prompt, messeges) => {
  try {
    const res = await client.post(chatGptEndPoint, {
      model: 'gpt-3.5-turbo',
      messeges: [
        {
          role: 'user',
          content: `Does this message want to generate an AI picture, image, art or anything similar? ${prompt} . simply answer with a yes or no.`,
        },
      ],
    });
    console.log('data', res.data);
  } catch (error) {
    console.log(error);
    return Promise.resolve({success: false, msg: error.messege});
  }
};
