import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hkis")
export default class HkiController {
  @operation({
    summary: "Get Hkis",
  })
  @get()
  static getHkis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hki",
  })
  @post("{id}")
  static createHki = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
