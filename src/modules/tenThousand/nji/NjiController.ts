import { procedure, prefix, get, post, operation } from "vovk";

@prefix("njis")
export default class NjiController {
  @operation({
    summary: "Get Njis",
  })
  @get()
  static getNjis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nji",
  })
  @post("{id}")
  static createNji = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
