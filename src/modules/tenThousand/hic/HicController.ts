import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hics")
export default class HicController {
  @operation({
    summary: "Get Hics",
  })
  @get()
  static getHics = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hic",
  })
  @post("{id}")
  static createHic = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
