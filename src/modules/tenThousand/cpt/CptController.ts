import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cpts")
export default class CptController {
  @operation({
    summary: "Get Cpts",
  })
  @get()
  static getCpts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cpt",
  })
  @post("{id}")
  static createCpt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
