import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ggr")
export default class GgrController {
  @operation({
    summary: "Get Ggr",
  })
  @get()
  static getGgr = procedure({
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
