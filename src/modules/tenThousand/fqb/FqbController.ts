import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fqbs")
export default class FqbController {
  @operation({
    summary: "Get Fqbs",
  })
  @get()
  static getFqbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fqb",
  })
  @post("{id}")
  static createFqb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
