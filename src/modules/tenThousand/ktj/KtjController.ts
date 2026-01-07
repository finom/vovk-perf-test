import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ktj")
export default class KtjController {
  @operation({
    summary: "Get Ktj",
  })
  @get()
  static getKtj = procedure({
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
