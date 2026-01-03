import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lfgs")
export default class LfgController {
  @operation({
    summary: "Get Lfgs",
  })
  @get()
  static getLfgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lfg",
  })
  @post("{id}")
  static createLfg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
