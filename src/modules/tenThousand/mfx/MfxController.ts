import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mfx")
export default class MfxController {
  @operation({
    summary: "Get Mfx",
  })
  @get()
  static getMfx = procedure({
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
