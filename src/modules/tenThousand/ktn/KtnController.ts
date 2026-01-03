import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ktns")
export default class KtnController {
  @operation({
    summary: "Get Ktns",
  })
  @get()
  static getKtns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ktn",
  })
  @post("{id}")
  static createKtn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
