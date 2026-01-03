import { procedure, prefix, get, post, operation } from "vovk";

@prefix("glxes")
export default class GlxController {
  @operation({
    summary: "Get Glxes",
  })
  @get()
  static getGlxes = procedure({
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
