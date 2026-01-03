import { procedure, prefix, get, post, operation } from "vovk";

@prefix("boms")
export default class BomController {
  @operation({
    summary: "Get Boms",
  })
  @get()
  static getBoms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bom",
  })
  @post("{id}")
  static createBom = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
