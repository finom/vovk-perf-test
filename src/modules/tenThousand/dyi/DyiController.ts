import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dyis")
export default class DyiController {
  @operation({
    summary: "Get Dyis",
  })
  @get()
  static getDyis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dyi",
  })
  @post("{id}")
  static createDyi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
