import { procedure, prefix, get, post, operation } from "vovk";

@prefix("czhs")
export default class CzhController {
  @operation({
    summary: "Get Czhs",
  })
  @get()
  static getCzhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Czh",
  })
  @post("{id}")
  static createCzh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
