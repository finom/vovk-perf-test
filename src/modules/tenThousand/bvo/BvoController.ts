import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bvos")
export default class BvoController {
  @operation({
    summary: "Get Bvos",
  })
  @get()
  static getBvos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bvo",
  })
  @post("{id}")
  static createBvo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
