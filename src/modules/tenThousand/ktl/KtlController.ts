import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ktl")
export default class KtlController {
  @operation({
    summary: "Get Ktl",
  })
  @get()
  static getKtl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ktl",
  })
  @post("{id}")
  static createKtl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
