import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ndns")
export default class NdnController {
  @operation({
    summary: "Get Ndns",
  })
  @get()
  static getNdns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ndn",
  })
  @post("{id}")
  static createNdn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
