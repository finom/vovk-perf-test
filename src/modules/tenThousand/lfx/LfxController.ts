import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lfx")
export default class LfxController {
  @operation({
    summary: "Get Lfx",
  })
  @get()
  static getLfx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lfx",
  })
  @post("{id}")
  static createLfx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
