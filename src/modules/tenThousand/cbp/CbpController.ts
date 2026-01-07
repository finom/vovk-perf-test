import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cbp")
export default class CbpController {
  @operation({
    summary: "Get Cbp",
  })
  @get()
  static getCbp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cbp",
  })
  @post("{id}")
  static createCbp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
