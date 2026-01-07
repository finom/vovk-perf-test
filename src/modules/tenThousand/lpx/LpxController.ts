import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lpx")
export default class LpxController {
  @operation({
    summary: "Get Lpx",
  })
  @get()
  static getLpx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lpx",
  })
  @post("{id}")
  static createLpx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
