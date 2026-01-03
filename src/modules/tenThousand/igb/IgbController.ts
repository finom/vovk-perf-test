import { procedure, prefix, get, post, operation } from "vovk";

@prefix("igbs")
export default class IgbController {
  @operation({
    summary: "Get Igbs",
  })
  @get()
  static getIgbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Igb",
  })
  @post("{id}")
  static createIgb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
