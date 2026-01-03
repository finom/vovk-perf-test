import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nfns")
export default class NfnController {
  @operation({
    summary: "Get Nfns",
  })
  @get()
  static getNfns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nfn",
  })
  @post("{id}")
  static createNfn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
