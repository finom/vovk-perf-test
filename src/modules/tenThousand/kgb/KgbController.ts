import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kgb")
export default class KgbController {
  @operation({
    summary: "Get Kgb",
  })
  @get()
  static getKgb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kgb",
  })
  @post("{id}")
  static createKgb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
