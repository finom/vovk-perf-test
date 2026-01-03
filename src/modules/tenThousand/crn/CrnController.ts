import { procedure, prefix, get, post, operation } from "vovk";

@prefix("crns")
export default class CrnController {
  @operation({
    summary: "Get Crns",
  })
  @get()
  static getCrns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Crn",
  })
  @post("{id}")
  static createCrn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
