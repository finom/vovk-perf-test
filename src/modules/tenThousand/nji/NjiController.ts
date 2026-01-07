import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nji")
export default class NjiController {
  @operation({
    summary: "Get Nji",
  })
  @get()
  static getNji = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nji",
  })
  @post("{id}")
  static createNji = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
