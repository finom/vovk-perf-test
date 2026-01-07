import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fmm")
export default class FmmController {
  @operation({
    summary: "Get Fmm",
  })
  @get()
  static getFmm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fmm",
  })
  @post("{id}")
  static createFmm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
