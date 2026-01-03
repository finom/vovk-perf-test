import { procedure, prefix, get, post, operation } from "vovk";

@prefix("crps")
export default class CrpController {
  @operation({
    summary: "Get Crps",
  })
  @get()
  static getCrps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Crp",
  })
  @post("{id}")
  static createCrp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
