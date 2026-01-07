import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gfb")
export default class GfbController {
  @operation({
    summary: "Get Gfb",
  })
  @get()
  static getGfb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gfb",
  })
  @post("{id}")
  static createGfb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
