/* eslint-disable import/no-anonymous-default-export */
import { Analytics } from "@segment/analytics-node";
import { NextRequest, NextResponse } from "next/server";

export const analytics = new Analytics({
  writeKey: "DjTUVRhleGaZX31JQpj6XIAaprCIb25W",
  maxEventsInBatch: 1,
})
  .on("error", console.error)
  .on("http_request", console.log);

export const config = {
  runtime: "edge",
};

export default async (req: NextRequest) => {
  await new Promise((resolve) =>
    analytics.track(
      { userId: "edge runtime", event: "hello from edge!" },
      resolve
    )
  );
  return NextResponse.json({
    name: `Hello, from ${req.url} I'm now an Edge Function!`,
  });
};
