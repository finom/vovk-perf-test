import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ffx")
export default class FfxController {
  @operation({
    summary: "Get Ffx",
  })
  @get()
  static getFfx = procedure({
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
