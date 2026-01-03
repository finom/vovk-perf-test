import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ctes")
export default class CteController {
  @operation({
    summary: "Get Ctes",
  })
  @get()
  static getCtes = procedure({
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
