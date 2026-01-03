import { procedure, prefix, get, post, operation } from "vovk";

@prefix("grns")
export default class GrnController {
  @operation({
    summary: "Get Grns",
  })
  @get()
  static getGrns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Grn",
  })
  @post("{id}")
  static createGrn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
