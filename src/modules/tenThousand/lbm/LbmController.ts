import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lbm")
export default class LbmController {
  @operation({
    summary: "Get Lbm",
  })
  @get()
  static getLbm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lbm",
  })
  @post("{id}")
  static createLbm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
