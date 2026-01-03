import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kcms")
export default class KcmController {
  @operation({
    summary: "Get Kcms",
  })
  @get()
  static getKcms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kcm",
  })
  @post("{id}")
  static createKcm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
