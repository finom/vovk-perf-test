import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ktm")
export default class KtmController {
  @operation({
    summary: "Get Ktm",
  })
  @get()
  static getKtm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ktm",
  })
  @post("{id}")
  static createKtm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
