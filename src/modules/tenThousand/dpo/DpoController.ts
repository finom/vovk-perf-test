import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dpos")
export default class DpoController {
  @operation({
    summary: "Get Dpos",
  })
  @get()
  static getDpos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dpo",
  })
  @post("{id}")
  static createDpo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
