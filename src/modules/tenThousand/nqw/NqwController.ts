import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nqws")
export default class NqwController {
  @operation({
    summary: "Get Nqws",
  })
  @get()
  static getNqws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nqw",
  })
  @post("{id}")
  static createNqw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
