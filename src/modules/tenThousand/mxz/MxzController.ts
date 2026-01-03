import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mxzs")
export default class MxzController {
  @operation({
    summary: "Get Mxzs",
  })
  @get()
  static getMxzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mxz",
  })
  @post("{id}")
  static createMxz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
