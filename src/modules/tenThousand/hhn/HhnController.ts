import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hhns")
export default class HhnController {
  @operation({
    summary: "Get Hhns",
  })
  @get()
  static getHhns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hhn",
  })
  @post("{id}")
  static createHhn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
