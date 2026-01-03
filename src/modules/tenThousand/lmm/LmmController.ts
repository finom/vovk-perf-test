import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lmms")
export default class LmmController {
  @operation({
    summary: "Get Lmms",
  })
  @get()
  static getLmms = procedure({
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
