import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mxs")
export default class MxsController {
  @operation({
    summary: "Get Mxs",
  })
  @get()
  static getMxs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mxs",
  })
  @post("{id}")
  static createMxs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
