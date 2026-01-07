import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ktq")
export default class KtqController {
  @operation({
    summary: "Get Ktq",
  })
  @get()
  static getKtq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ktq",
  })
  @post("{id}")
  static createKtq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
