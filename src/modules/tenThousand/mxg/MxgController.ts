import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mxgs")
export default class MxgController {
  @operation({
    summary: "Get Mxgs",
  })
  @get()
  static getMxgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mxg",
  })
  @post("{id}")
  static createMxg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
