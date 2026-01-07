import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mxq")
export default class MxqController {
  @operation({
    summary: "Get Mxq",
  })
  @get()
  static getMxq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mxq",
  })
  @post("{id}")
  static createMxq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
