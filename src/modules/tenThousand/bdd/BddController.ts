import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bdd")
export default class BddController {
  @operation({
    summary: "Get Bdd",
  })
  @get()
  static getBdd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bdd",
  })
  @post("{id}")
  static createBdd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
