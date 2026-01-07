import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mxw")
export default class MxwController {
  @operation({
    summary: "Get Mxw",
  })
  @get()
  static getMxw = procedure({
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
