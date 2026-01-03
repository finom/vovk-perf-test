import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gcgs")
export default class GcgController {
  @operation({
    summary: "Get Gcgs",
  })
  @get()
  static getGcgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gcg",
  })
  @post("{id}")
  static createGcg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
