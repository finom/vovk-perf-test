import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cdts")
export default class CdtController {
  @operation({
    summary: "Get Cdts",
  })
  @get()
  static getCdts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cdt",
  })
  @post("{id}")
  static createCdt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
