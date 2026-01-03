import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lzs")
export default class LzsController {
  @operation({
    summary: "Get Lzs",
  })
  @get()
  static getLzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lzs",
  })
  @post("{id}")
  static createLzs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
