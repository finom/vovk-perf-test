import { procedure, prefix, get, post, operation } from "vovk";

@prefix("crgs")
export default class CrgController {
  @operation({
    summary: "Get Crgs",
  })
  @get()
  static getCrgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Crg",
  })
  @post("{id}")
  static createCrg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
