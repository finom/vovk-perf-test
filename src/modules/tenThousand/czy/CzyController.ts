import { procedure, prefix, get, post, operation } from "vovk";

@prefix("czies")
export default class CzyController {
  @operation({
    summary: "Get Czies",
  })
  @get()
  static getCzies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Czy",
  })
  @post("{id}")
  static createCzy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
