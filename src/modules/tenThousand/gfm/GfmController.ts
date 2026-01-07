import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gfm")
export default class GfmController {
  @operation({
    summary: "Get Gfm",
  })
  @get()
  static getGfm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gfm",
  })
  @post("{id}")
  static createGfm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
