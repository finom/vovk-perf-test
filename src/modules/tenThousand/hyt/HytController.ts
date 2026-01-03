import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hyts")
export default class HytController {
  @operation({
    summary: "Get Hyts",
  })
  @get()
  static getHyts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hyt",
  })
  @post("{id}")
  static createHyt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
