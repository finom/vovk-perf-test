import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hfgs")
export default class HfgController {
  @operation({
    summary: "Get Hfgs",
  })
  @get()
  static getHfgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hfg",
  })
  @post("{id}")
  static createHfg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
