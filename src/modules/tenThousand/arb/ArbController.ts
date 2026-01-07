import { procedure, prefix, get, post, operation } from "vovk";

@prefix("arb")
export default class ArbController {
  @operation({
    summary: "Get Arb",
  })
  @get()
  static getArb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Arb",
  })
  @post("{id}")
  static createArb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
