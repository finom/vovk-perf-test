import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cbcs")
export default class CbcController {
  @operation({
    summary: "Get Cbcs",
  })
  @get()
  static getCbcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cbc",
  })
  @post("{id}")
  static createCbc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
