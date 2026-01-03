import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gfps")
export default class GfpController {
  @operation({
    summary: "Get Gfps",
  })
  @get()
  static getGfps = procedure({
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
