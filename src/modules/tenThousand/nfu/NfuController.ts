import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nfus")
export default class NfuController {
  @operation({
    summary: "Get Nfus",
  })
  @get()
  static getNfus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nfu",
  })
  @post("{id}")
  static createNfu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
