import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cbg")
export default class CbgController {
  @operation({
    summary: "Get Cbg",
  })
  @get()
  static getCbg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cbg",
  })
  @post("{id}")
  static createCbg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
