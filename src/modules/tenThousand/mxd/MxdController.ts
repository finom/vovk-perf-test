import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mxds")
export default class MxdController {
  @operation({
    summary: "Get Mxds",
  })
  @get()
  static getMxds = procedure({
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
