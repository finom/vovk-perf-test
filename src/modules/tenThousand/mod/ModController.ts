import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mod")
export default class ModController {
  @operation({
    summary: "Get Mod",
  })
  @get()
  static getMod = procedure({
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
