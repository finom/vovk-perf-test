import { procedure, prefix, get, post, operation } from "vovk";

@prefix("glp")
export default class GlpController {
  @operation({
    summary: "Get Glp",
  })
  @get()
  static getGlp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Glp",
  })
  @post("{id}")
  static createGlp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
