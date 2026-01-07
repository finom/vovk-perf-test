import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nfp")
export default class NfpController {
  @operation({
    summary: "Get Nfp",
  })
  @get()
  static getNfp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nfp",
  })
  @post("{id}")
  static createNfp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
