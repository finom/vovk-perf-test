import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cdp")
export default class CdpController {
  @operation({
    summary: "Get Cdp",
  })
  @get()
  static getCdp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cdp",
  })
  @post("{id}")
  static createCdp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
