import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cdp")
export default class CdpController {
  @operation({
    summary: "Get Cdp",
  })
  @get()
  static getCdp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cdp",
  })
  @post("{id}")
  static createCdp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
