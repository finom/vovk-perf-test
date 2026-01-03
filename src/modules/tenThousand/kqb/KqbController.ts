import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kqbs")
export default class KqbController {
  @operation({
    summary: "Get Kqbs",
  })
  @get()
  static getKqbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kqb",
  })
  @post("{id}")
  static createKqb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
