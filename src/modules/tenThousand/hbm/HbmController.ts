import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hbm")
export default class HbmController {
  @operation({
    summary: "Get Hbm",
  })
  @get()
  static getHbm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hbm",
  })
  @post("{id}")
  static createHbm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
