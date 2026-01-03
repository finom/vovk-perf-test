import { procedure, prefix, get, post, operation } from "vovk";

@prefix("negs")
export default class NegController {
  @operation({
    summary: "Get Negs",
  })
  @get()
  static getNegs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Neg",
  })
  @post("{id}")
  static createNeg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
