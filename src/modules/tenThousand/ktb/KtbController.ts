import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ktbs")
export default class KtbController {
  @operation({
    summary: "Get Ktbs",
  })
  @get()
  static getKtbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ktb",
  })
  @post("{id}")
  static createKtb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
