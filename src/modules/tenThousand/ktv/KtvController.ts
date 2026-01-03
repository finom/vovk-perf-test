import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ktvs")
export default class KtvController {
  @operation({
    summary: "Get Ktvs",
  })
  @get()
  static getKtvs = procedure({
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
