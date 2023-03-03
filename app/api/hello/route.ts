// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Analytics } from "@segment/analytics-node";

export const analytics = new Analytics({
  writeKey: "DjTUVRhleGaZX31JQpj6XIAaprCIb25W",
  maxEventsInBatch: 1,
})
  .on("error", console.error)
  .on("http_request", console.log);

export async function GET(request: Request) {
  analytics.track({ event: "my-event", userId: "<SOME_ID>" });
  return new Response("Hello, Next.js!");
}
