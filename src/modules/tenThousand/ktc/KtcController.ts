import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ktc")
export default class KtcController {
  @operation({
    summary: "Get Ktc",
  })
  @get()
  static getKtc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ktc",
  })
  @post("{id}")
  static createKtc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
