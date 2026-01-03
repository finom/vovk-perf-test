import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nfxes")
export default class NfxController {
  @operation({
    summary: "Get Nfxes",
  })
  @get()
  static getNfxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nfx",
  })
  @post("{id}")
  static createNfx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
