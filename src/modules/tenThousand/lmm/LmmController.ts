import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lmm")
export default class LmmController {
  @operation({
    summary: "Get Lmm",
  })
  @get()
  static getLmm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lmm",
  })
  @post("{id}")
  static createLmm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
