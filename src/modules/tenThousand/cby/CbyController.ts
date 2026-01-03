import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cbies")
export default class CbyController {
  @operation({
    summary: "Get Cbies",
  })
  @get()
  static getCbies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cby",
  })
  @post("{id}")
  static createCby = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
