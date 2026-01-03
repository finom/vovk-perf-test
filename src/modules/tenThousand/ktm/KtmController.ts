import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ktms")
export default class KtmController {
  @operation({
    summary: "Get Ktms",
  })
  @get()
  static getKtms = procedure({
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
