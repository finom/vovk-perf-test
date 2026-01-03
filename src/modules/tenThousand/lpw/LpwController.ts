import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lpws")
export default class LpwController {
  @operation({
    summary: "Get Lpws",
  })
  @get()
  static getLpws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lpw",
  })
  @post("{id}")
  static createLpw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
