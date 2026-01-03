import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kdns")
export default class KdnController {
  @operation({
    summary: "Get Kdns",
  })
  @get()
  static getKdns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kdn",
  })
  @post("{id}")
  static createKdn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
