import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ktd")
export default class KtdController {
  @operation({
    summary: "Get Ktd",
  })
  @get()
  static getKtd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ktd",
  })
  @post("{id}")
  static createKtd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
