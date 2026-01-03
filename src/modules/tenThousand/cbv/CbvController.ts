import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cbvs")
export default class CbvController {
  @operation({
    summary: "Get Cbvs",
  })
  @get()
  static getCbvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cbv",
  })
  @post("{id}")
  static createCbv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
