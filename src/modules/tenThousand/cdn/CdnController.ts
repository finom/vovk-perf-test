import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cdns")
export default class CdnController {
  @operation({
    summary: "Get Cdns",
  })
  @get()
  static getCdns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cdn",
  })
  @post("{id}")
  static createCdn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
