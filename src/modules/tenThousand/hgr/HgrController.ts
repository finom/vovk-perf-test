import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hgrs")
export default class HgrController {
  @operation({
    summary: "Get Hgrs",
  })
  @get()
  static getHgrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hgr",
  })
  @post("{id}")
  static createHgr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
