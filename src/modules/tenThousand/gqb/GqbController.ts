import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gqbs")
export default class GqbController {
  @operation({
    summary: "Get Gqbs",
  })
  @get()
  static getGqbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gqb",
  })
  @post("{id}")
  static createGqb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
