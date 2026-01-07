import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lfg")
export default class LfgController {
  @operation({
    summary: "Get Lfg",
  })
  @get()
  static getLfg = procedure({
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
