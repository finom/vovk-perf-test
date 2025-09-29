import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eoos")
export default class EooController {
  @operation({
    summary: "Get Eoos",
  })
  @get()
  static getEoos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eoo",
  })
  @post("{id}")
  static createEoo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
