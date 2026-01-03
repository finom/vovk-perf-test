import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gkis")
export default class GkiController {
  @operation({
    summary: "Get Gkis",
  })
  @get()
  static getGkis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gki",
  })
  @post("{id}")
  static createGki = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
