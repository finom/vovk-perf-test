import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ktjs")
export default class KtjController {
  @operation({
    summary: "Get Ktjs",
  })
  @get()
  static getKtjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ktj",
  })
  @post("{id}")
  static createKtj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
