import { procedure, prefix, get, post, operation } from "vovk";

@prefix("glr")
export default class GlrController {
  @operation({
    summary: "Get Glr",
  })
  @get()
  static getGlr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Glr",
  })
  @post("{id}")
  static createGlr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
