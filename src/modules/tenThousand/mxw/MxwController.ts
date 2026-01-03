import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mxws")
export default class MxwController {
  @operation({
    summary: "Get Mxws",
  })
  @get()
  static getMxws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mxw",
  })
  @post("{id}")
  static createMxw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
