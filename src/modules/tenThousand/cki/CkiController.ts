import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ckis")
export default class CkiController {
  @operation({
    summary: "Get Ckis",
  })
  @get()
  static getCkis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cki",
  })
  @post("{id}")
  static createCki = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
