import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gfgs")
export default class GfgController {
  @operation({
    summary: "Get Gfgs",
  })
  @get()
  static getGfgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gfg",
  })
  @post("{id}")
  static createGfg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
