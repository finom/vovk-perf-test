import { procedure, prefix, get, post, operation } from "vovk";

@prefix("glk")
export default class GlkController {
  @operation({
    summary: "Get Glk",
  })
  @get()
  static getGlk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Glk",
  })
  @post("{id}")
  static createGlk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
