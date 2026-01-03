import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gdns")
export default class GdnController {
  @operation({
    summary: "Get Gdns",
  })
  @get()
  static getGdns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gdn",
  })
  @post("{id}")
  static createGdn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
