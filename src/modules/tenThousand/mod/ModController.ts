import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mods")
export default class ModController {
  @operation({
    summary: "Get Mods",
  })
  @get()
  static getMods = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mod",
  })
  @post("{id}")
  static createMod = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
