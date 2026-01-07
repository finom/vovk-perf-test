import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gki")
export default class GkiController {
  @operation({
    summary: "Get Gki",
  })
  @get()
  static getGki = procedure({
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
