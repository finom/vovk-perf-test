import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gtes")
export default class GteController {
  @operation({
    summary: "Get Gtes",
  })
  @get()
  static getGtes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gte",
  })
  @post("{id}")
  static createGte = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
