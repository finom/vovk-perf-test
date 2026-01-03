import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ggrs")
export default class GgrController {
  @operation({
    summary: "Get Ggrs",
  })
  @get()
  static getGgrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ggr",
  })
  @post("{id}")
  static createGgr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
