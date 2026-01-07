import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mxz")
export default class MxzController {
  @operation({
    summary: "Get Mxz",
  })
  @get()
  static getMxz = procedure({
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
