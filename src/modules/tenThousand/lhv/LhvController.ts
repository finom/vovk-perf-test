import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lhv")
export default class LhvController {
  @operation({
    summary: "Get Lhv",
  })
  @get()
  static getLhv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lhv",
  })
  @post("{id}")
  static createLhv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
