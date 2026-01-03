import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kkis")
export default class KkiController {
  @operation({
    summary: "Get Kkis",
  })
  @get()
  static getKkis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kki",
  })
  @post("{id}")
  static createKki = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
