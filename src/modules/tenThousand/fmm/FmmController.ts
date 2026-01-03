import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fmms")
export default class FmmController {
  @operation({
    summary: "Get Fmms",
  })
  @get()
  static getFmms = procedure({
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
