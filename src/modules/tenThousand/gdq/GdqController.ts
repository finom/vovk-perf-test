import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gdqs")
export default class GdqController {
  @operation({
    summary: "Get Gdqs",
  })
  @get()
  static getGdqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gdq",
  })
  @post("{id}")
  static createGdq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
