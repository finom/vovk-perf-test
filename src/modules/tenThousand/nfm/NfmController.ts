import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nfms")
export default class NfmController {
  @operation({
    summary: "Get Nfms",
  })
  @get()
  static getNfms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nfm",
  })
  @post("{id}")
  static createNfm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
