import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dyp")
export default class DypController {
  @operation({
    summary: "Get Dyp",
  })
  @get()
  static getDyp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dyp",
  })
  @post("{id}")
  static createDyp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
