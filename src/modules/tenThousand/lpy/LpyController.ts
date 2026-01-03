import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lpies")
export default class LpyController {
  @operation({
    summary: "Get Lpies",
  })
  @get()
  static getLpies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lpy",
  })
  @post("{id}")
  static createLpy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
