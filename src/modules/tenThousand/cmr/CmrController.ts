import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cmr")
export default class CmrController {
  @operation({
    summary: "Get Cmr",
  })
  @get()
  static getCmr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cmr",
  })
  @post("{id}")
  static createCmr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
