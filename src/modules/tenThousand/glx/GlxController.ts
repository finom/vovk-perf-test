import { procedure, prefix, get, post, operation } from "vovk";

@prefix("glx")
export default class GlxController {
  @operation({
    summary: "Get Glx",
  })
  @get()
  static getGlx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Glx",
  })
  @post("{id}")
  static createGlx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
