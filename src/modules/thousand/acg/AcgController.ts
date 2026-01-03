import { procedure, prefix, get, post, operation } from "vovk";

@prefix("acgs")
export default class AcgController {
  @operation({
    summary: "Get Acgs",
  })
  @get()
  static getAcgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Acg",
  })
  @post("{id}")
  static createAcg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
