import { procedure, prefix, get, post, operation } from "vovk";

@prefix("glh")
export default class GlhController {
  @operation({
    summary: "Get Glh",
  })
  @get()
  static getGlh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Glh",
  })
  @post("{id}")
  static createGlh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
