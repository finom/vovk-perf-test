import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nfg")
export default class NfgController {
  @operation({
    summary: "Get Nfg",
  })
  @get()
  static getNfg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nfg",
  })
  @post("{id}")
  static createNfg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
