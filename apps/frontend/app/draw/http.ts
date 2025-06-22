import { HTTP_BACKEND } from "@/config";
import axios from "axios";

export async function getExistingShapes(roomId: string) {
  const res = await axios.get(`${HTTP_BACKEND}/chats/${roomId}`);
  console.log(res.data); // Should log an array

  const shapes = res.data.map((x: { message: string }) => {
    try {
      const messageData = JSON.parse(x.message);
      return messageData.shape;
    } catch (err) {
      console.error("Invalid message format:", x.message);
      return null;
    }
  }).filter(Boolean); // remove nulls

  return shapes;
}
