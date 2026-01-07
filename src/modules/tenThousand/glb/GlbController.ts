import { procedure, prefix, get, post, operation } from "vovk";

@prefix("glb")
export default class GlbController {
  @operation({
    summary: "Get Glb",
  })
  @get()
  static getGlb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Glb",
  })
  @post("{id}")
  static createGlb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
