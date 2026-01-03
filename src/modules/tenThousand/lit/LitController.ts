import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lits")
export default class LitController {
  @operation({
    summary: "Get Lits",
  })
  @get()
  static getLits = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lit",
  })
  @post("{id}")
  static createLit = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
