import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ktqs")
export default class KtqController {
  @operation({
    summary: "Get Ktqs",
  })
  @get()
  static getKtqs = procedure({
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
