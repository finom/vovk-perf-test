import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nws")
export default class NwController {
  @operation({
    summary: "Get Nws",
  })
  @get()
  static getNws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nw",
  })
  @post("{id}")
  static createNw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
