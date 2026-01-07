import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gfp")
export default class GfpController {
  @operation({
    summary: "Get Gfp",
  })
  @get()
  static getGfp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gfp",
  })
  @post("{id}")
  static createGfp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
