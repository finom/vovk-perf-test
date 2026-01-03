import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ktds")
export default class KtdController {
  @operation({
    summary: "Get Ktds",
  })
  @get()
  static getKtds = procedure({
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
