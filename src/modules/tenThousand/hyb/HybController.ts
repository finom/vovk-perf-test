import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hyb")
export default class HybController {
  @operation({
    summary: "Get Hyb",
  })
  @get()
  static getHyb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hyb",
  })
  @post("{id}")
  static createHyb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
