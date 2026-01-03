import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mfxes")
export default class MfxController {
  @operation({
    summary: "Get Mfxes",
  })
  @get()
  static getMfxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mfx",
  })
  @post("{id}")
  static createMfx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
