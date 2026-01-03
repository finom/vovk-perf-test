import { procedure, prefix, get, post, operation } from "vovk";

@prefix("djis")
export default class DjiController {
  @operation({
    summary: "Get Djis",
  })
  @get()
  static getDjis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dji",
  })
  @post("{id}")
  static createDji = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
