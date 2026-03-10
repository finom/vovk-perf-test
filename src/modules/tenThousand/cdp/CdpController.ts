import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cdp")
export default class CdpController {
  @operation({
    summary: "Get Cdp",
  })
  @get()
  static getCdp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cdp",
  })
  @post("{id}")
  static createCdp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
