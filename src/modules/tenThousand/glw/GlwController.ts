import { procedure, prefix, get, post, operation } from "vovk";

@prefix("glws")
export default class GlwController {
  @operation({
    summary: "Get Glws",
  })
  @get()
  static getGlws = procedure({
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
