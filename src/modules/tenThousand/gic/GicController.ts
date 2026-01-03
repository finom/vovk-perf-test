import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gics")
export default class GicController {
  @operation({
    summary: "Get Gics",
  })
  @get()
  static getGics = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gic",
  })
  @post("{id}")
  static createGic = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
