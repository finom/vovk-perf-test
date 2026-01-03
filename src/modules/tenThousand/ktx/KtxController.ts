import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ktxes")
export default class KtxController {
  @operation({
    summary: "Get Ktxes",
  })
  @get()
  static getKtxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ktx",
  })
  @post("{id}")
  static createKtx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
