import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lpg")
export default class LpgController {
  @operation({
    summary: "Get Lpg",
  })
  @get()
  static getLpg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lpg",
  })
  @post("{id}")
  static createLpg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
