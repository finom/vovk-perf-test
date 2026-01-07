import { procedure, prefix, get, post, operation } from "vovk";

@prefix("glv")
export default class GlvController {
  @operation({
    summary: "Get Glv",
  })
  @get()
  static getGlv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Glv",
  })
  @post("{id}")
  static createGlv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
