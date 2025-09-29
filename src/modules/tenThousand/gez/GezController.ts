import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gezs")
export default class GezController {
  @operation({
    summary: "Get Gezs",
  })
  @get()
  static getGezs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gez",
  })
  @post("{id}")
  static createGez = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
