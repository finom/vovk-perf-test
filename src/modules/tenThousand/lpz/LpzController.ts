import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lpz")
export default class LpzController {
  @operation({
    summary: "Get Lpz",
  })
  @get()
  static getLpz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lpz",
  })
  @post("{id}")
  static createLpz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
