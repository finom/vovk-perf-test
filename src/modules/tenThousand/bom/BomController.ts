import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bom")
export default class BomController {
  @operation({
    summary: "Get Bom",
  })
  @get()
  static getBom = procedure({
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
