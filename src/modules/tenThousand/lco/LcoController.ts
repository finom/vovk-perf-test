import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lcos")
export default class LcoController {
  @operation({
    summary: "Get Lcos",
  })
  @get()
  static getLcos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lco",
  })
  @post("{id}")
  static createLco = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
