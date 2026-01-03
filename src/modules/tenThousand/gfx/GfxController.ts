import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gfxes")
export default class GfxController {
  @operation({
    summary: "Get Gfxes",
  })
  @get()
  static getGfxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gfx",
  })
  @post("{id}")
  static createGfx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
