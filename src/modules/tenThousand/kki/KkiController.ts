import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kki")
export default class KkiController {
  @operation({
    summary: "Get Kki",
  })
  @get()
  static getKki = procedure({
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
