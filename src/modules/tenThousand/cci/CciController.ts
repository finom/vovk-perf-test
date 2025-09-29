import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ccis")
export default class CciController {
  @operation({
    summary: "Get Ccis",
  })
  @get()
  static getCcis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cci",
  })
  @post("{id}")
  static createCci = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
