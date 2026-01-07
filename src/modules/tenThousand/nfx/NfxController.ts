import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nfx")
export default class NfxController {
  @operation({
    summary: "Get Nfx",
  })
  @get()
  static getNfx = procedure({
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
