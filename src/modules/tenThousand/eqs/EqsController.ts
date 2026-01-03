import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eqs")
export default class EqsController {
  @operation({
    summary: "Get Eqs",
  })
  @get()
  static getEqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eqs",
  })
  @post("{id}")
  static createEqs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
