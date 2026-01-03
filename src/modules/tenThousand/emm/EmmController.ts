import { procedure, prefix, get, post, operation } from "vovk";

@prefix("emms")
export default class EmmController {
  @operation({
    summary: "Get Emms",
  })
  @get()
  static getEmms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Emm",
  })
  @post("{id}")
  static createEmm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
