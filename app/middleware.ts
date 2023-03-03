// middleware.ts

import  {Analytics} from '@segment/analytics-node'
import { NextRequest, NextFetchEvent } from "next/server";

export const analytics = new Analytics({
  writeKey: "DjTUVRhleGaZX31JQpj6XIAaprCIb25W",
  maxEventsInBatch: 1,
})
  .on("error", console.error)
  .on("http_request", console.log);

export async function middleware() {
  analytics.track({ userId: "foo", event: "bar" });
}
