import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ljas")
export default class LjaController {
  @operation({
    summary: "Get Ljas",
  })
  @get()
  static getLjas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lja",
  })
  @post("{id}")
  static createLja = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
