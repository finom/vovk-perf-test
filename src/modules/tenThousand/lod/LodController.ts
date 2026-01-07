import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lod")
export default class LodController {
  @operation({
    summary: "Get Lod",
  })
  @get()
  static getLod = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lod",
  })
  @post("{id}")
  static createLod = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
