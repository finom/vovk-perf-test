import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cte")
export default class CteController {
  @operation({
    summary: "Get Cte",
  })
  @get()
  static getCte = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cte",
  })
  @post("{id}")
  static createCte = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
