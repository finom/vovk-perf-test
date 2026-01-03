import { procedure, prefix, get, post, operation } from "vovk";

@prefix("czks")
export default class CzkController {
  @operation({
    summary: "Get Czks",
  })
  @get()
  static getCzks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Czk",
  })
  @post("{id}")
  static createCzk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
