import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lqbs")
export default class LqbController {
  @operation({
    summary: "Get Lqbs",
  })
  @get()
  static getLqbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lqb",
  })
  @post("{id}")
  static createLqb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
