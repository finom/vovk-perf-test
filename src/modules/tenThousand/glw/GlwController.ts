import { procedure, prefix, get, post, operation } from "vovk";

@prefix("glw")
export default class GlwController {
  @operation({
    summary: "Get Glw",
  })
  @get()
  static getGlw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Glw",
  })
  @post("{id}")
  static createGlw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
