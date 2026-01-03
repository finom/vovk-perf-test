import { procedure, prefix, get, post, operation } from "vovk";

@prefix("duhs")
export default class DuhController {
  @operation({
    summary: "Get Duhs",
  })
  @get()
  static getDuhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Duh",
  })
  @post("{id}")
  static createDuh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
