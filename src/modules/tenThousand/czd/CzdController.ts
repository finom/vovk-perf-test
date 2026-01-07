import { procedure, prefix, get, post, operation } from "vovk";

@prefix("czd")
export default class CzdController {
  @operation({
    summary: "Get Czd",
  })
  @get()
  static getCzd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Czd",
  })
  @post("{id}")
  static createCzd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
