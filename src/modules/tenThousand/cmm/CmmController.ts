import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cmms")
export default class CmmController {
  @operation({
    summary: "Get Cmms",
  })
  @get()
  static getCmms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cmm",
  })
  @post("{id}")
  static createCmm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
