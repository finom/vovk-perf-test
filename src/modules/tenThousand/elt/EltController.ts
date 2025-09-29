import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("elts")
export default class EltController {
  @operation({
    summary: "Get Elts",
  })
  @get()
  static getElts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Elt",
  })
  @post("{id}")
  static createElt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
