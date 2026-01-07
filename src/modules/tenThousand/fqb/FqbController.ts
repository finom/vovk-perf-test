import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fqb")
export default class FqbController {
  @operation({
    summary: "Get Fqb",
  })
  @get()
  static getFqb = procedure({
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
