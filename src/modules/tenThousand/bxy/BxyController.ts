import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bxy")
export default class BxyController {
  @operation({
    summary: "Get Bxy",
  })
  @get()
  static getBxy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bxy",
  })
  @post("{id}")
  static createBxy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
