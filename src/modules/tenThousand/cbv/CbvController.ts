import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cbv")
export default class CbvController {
  @operation({
    summary: "Get Cbv",
  })
  @get()
  static getCbv = procedure({
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
