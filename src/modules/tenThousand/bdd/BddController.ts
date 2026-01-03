import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bdds")
export default class BddController {
  @operation({
    summary: "Get Bdds",
  })
  @get()
  static getBdds = procedure({
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
