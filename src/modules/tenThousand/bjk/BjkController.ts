import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bjks")
export default class BjkController {
  @operation({
    summary: "Get Bjks",
  })
  @get()
  static getBjks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bjk",
  })
  @post("{id}")
  static createBjk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
