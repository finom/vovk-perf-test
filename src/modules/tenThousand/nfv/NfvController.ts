import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nfvs")
export default class NfvController {
  @operation({
    summary: "Get Nfvs",
  })
  @get()
  static getNfvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nfv",
  })
  @post("{id}")
  static createNfv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
