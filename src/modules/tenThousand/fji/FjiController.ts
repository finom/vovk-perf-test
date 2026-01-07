import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fji")
export default class FjiController {
  @operation({
    summary: "Get Fji",
  })
  @get()
  static getFji = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fji",
  })
  @post("{id}")
  static createFji = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
