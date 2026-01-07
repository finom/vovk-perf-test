import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mmm")
export default class MmmController {
  @operation({
    summary: "Get Mmm",
  })
  @get()
  static getMmm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mmm",
  })
  @post("{id}")
  static createMmm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
