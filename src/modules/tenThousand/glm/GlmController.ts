import { procedure, prefix, get, post, operation } from "vovk";

@prefix("glm")
export default class GlmController {
  @operation({
    summary: "Get Glm",
  })
  @get()
  static getGlm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Glm",
  })
  @post("{id}")
  static createGlm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
