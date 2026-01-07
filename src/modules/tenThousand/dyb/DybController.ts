import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dyb")
export default class DybController {
  @operation({
    summary: "Get Dyb",
  })
  @get()
  static getDyb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dyb",
  })
  @post("{id}")
  static createDyb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
