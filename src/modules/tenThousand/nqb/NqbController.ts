import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nqbs")
export default class NqbController {
  @operation({
    summary: "Get Nqbs",
  })
  @get()
  static getNqbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nqb",
  })
  @post("{id}")
  static createNqb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
