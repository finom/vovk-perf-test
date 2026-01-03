import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ffxes")
export default class FfxController {
  @operation({
    summary: "Get Ffxes",
  })
  @get()
  static getFfxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ffx",
  })
  @post("{id}")
  static createFfx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
