import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ktis")
export default class KtiController {
  @operation({
    summary: "Get Ktis",
  })
  @get()
  static getKtis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kti",
  })
  @post("{id}")
  static createKti = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
