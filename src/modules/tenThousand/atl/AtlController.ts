import { procedure, prefix, get, post, operation } from "vovk";

@prefix("atl")
export default class AtlController {
  @operation({
    summary: "Get Atl",
  })
  @get()
  static getAtl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Atl",
  })
  @post("{id}")
  static createAtl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
