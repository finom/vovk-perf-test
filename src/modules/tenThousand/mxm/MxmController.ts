import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mxm")
export default class MxmController {
  @operation({
    summary: "Get Mxm",
  })
  @get()
  static getMxm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mxm",
  })
  @post("{id}")
  static createMxm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
