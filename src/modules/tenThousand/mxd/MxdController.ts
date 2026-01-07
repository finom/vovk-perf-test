import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mxd")
export default class MxdController {
  @operation({
    summary: "Get Mxd",
  })
  @get()
  static getMxd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mxd",
  })
  @post("{id}")
  static createMxd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
