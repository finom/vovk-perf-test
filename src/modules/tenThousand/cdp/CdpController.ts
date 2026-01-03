import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cdps")
export default class CdpController {
  @operation({
    summary: "Get Cdps",
  })
  @get()
  static getCdps = procedure({
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
