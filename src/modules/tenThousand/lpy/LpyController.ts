import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lpy")
export default class LpyController {
  @operation({
    summary: "Get Lpy",
  })
  @get()
  static getLpy = procedure({
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
