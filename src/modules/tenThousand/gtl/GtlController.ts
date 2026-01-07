import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gtl")
export default class GtlController {
  @operation({
    summary: "Get Gtl",
  })
  @get()
  static getGtl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gtl",
  })
  @post("{id}")
  static createGtl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
