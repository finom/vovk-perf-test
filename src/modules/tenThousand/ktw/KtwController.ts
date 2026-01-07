import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ktw")
export default class KtwController {
  @operation({
    summary: "Get Ktw",
  })
  @get()
  static getKtw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ktw",
  })
  @post("{id}")
  static createKtw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
