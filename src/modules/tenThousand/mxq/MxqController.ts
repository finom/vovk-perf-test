import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mxqs")
export default class MxqController {
  @operation({
    summary: "Get Mxqs",
  })
  @get()
  static getMxqs = procedure({
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
