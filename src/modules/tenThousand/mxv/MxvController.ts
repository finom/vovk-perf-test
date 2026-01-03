import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mxvs")
export default class MxvController {
  @operation({
    summary: "Get Mxvs",
  })
  @get()
  static getMxvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mxv",
  })
  @post("{id}")
  static createMxv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
