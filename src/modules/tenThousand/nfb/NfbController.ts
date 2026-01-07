import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nfb")
export default class NfbController {
  @operation({
    summary: "Get Nfb",
  })
  @get()
  static getNfb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nfb",
  })
  @post("{id}")
  static createNfb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
