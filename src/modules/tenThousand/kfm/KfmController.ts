import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kfms")
export default class KfmController {
  @operation({
    summary: "Get Kfms",
  })
  @get()
  static getKfms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kfm",
  })
  @post("{id}")
  static createKfm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
