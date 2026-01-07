import { procedure, prefix, get, post, operation } from "vovk";

@prefix("glz")
export default class GlzController {
  @operation({
    summary: "Get Glz",
  })
  @get()
  static getGlz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Glz",
  })
  @post("{id}")
  static createGlz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
