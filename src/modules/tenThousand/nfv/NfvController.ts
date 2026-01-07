import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nfv")
export default class NfvController {
  @operation({
    summary: "Get Nfv",
  })
  @get()
  static getNfv = procedure({
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
