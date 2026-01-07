import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ktv")
export default class KtvController {
  @operation({
    summary: "Get Ktv",
  })
  @get()
  static getKtv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ktv",
  })
  @post("{id}")
  static createKtv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
