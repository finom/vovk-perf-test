import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nfks")
export default class NfkController {
  @operation({
    summary: "Get Nfks",
  })
  @get()
  static getNfks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nfk",
  })
  @post("{id}")
  static createNfk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
