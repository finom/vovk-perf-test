import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gzs")
export default class GzsController {
  @operation({
    summary: "Get Gzs",
  })
  @get()
  static getGzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gzs",
  })
  @post("{id}")
  static createGzs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
