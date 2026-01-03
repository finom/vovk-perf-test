import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ddns")
export default class DdnController {
  @operation({
    summary: "Get Ddns",
  })
  @get()
  static getDdns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ddn",
  })
  @post("{id}")
  static createDdn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
