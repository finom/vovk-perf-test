import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hbms")
export default class HbmController {
  @operation({
    summary: "Get Hbms",
  })
  @get()
  static getHbms = procedure({
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
