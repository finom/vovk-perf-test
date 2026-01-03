import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fvts")
export default class FvtController {
  @operation({
    summary: "Get Fvts",
  })
  @get()
  static getFvts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fvt",
  })
  @post("{id}")
  static createFvt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
