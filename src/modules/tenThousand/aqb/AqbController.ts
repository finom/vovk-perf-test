import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aqbs")
export default class AqbController {
  @operation({
    summary: "Get Aqbs",
  })
  @get()
  static getAqbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aqb",
  })
  @post("{id}")
  static createAqb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
