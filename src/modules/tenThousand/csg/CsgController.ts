import { procedure, prefix, get, post, operation } from "vovk";

@prefix("csg")
export default class CsgController {
  @operation({
    summary: "Get Csg",
  })
  @get()
  static getCsg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Csg",
  })
  @post("{id}")
  static createCsg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
