import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ktgs")
export default class KtgController {
  @operation({
    summary: "Get Ktgs",
  })
  @get()
  static getKtgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ktg",
  })
  @post("{id}")
  static createKtg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
