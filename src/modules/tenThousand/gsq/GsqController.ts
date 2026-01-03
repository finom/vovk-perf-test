import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gsqs")
export default class GsqController {
  @operation({
    summary: "Get Gsqs",
  })
  @get()
  static getGsqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gsq",
  })
  @post("{id}")
  static createGsq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
