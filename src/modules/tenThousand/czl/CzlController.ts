import { procedure, prefix, get, post, operation } from "vovk";

@prefix("czls")
export default class CzlController {
  @operation({
    summary: "Get Czls",
  })
  @get()
  static getCzls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Czl",
  })
  @post("{id}")
  static createCzl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
