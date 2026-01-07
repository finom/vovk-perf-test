import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lji")
export default class LjiController {
  @operation({
    summary: "Get Lji",
  })
  @get()
  static getLji = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lji",
  })
  @post("{id}")
  static createLji = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
