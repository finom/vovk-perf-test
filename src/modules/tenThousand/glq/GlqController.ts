import { procedure, prefix, get, post, operation } from "vovk";

@prefix("glq")
export default class GlqController {
  @operation({
    summary: "Get Glq",
  })
  @get()
  static getGlq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Glq",
  })
  @post("{id}")
  static createGlq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
