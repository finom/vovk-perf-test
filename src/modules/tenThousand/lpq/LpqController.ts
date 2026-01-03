import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lpqs")
export default class LpqController {
  @operation({
    summary: "Get Lpqs",
  })
  @get()
  static getLpqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lpq",
  })
  @post("{id}")
  static createLpq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
