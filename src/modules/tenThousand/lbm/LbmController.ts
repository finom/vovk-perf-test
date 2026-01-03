import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lbms")
export default class LbmController {
  @operation({
    summary: "Get Lbms",
  })
  @get()
  static getLbms = procedure({
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
