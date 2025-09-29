import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nojs")
export default class NojController {
  @operation({
    summary: "Get Nojs",
  })
  @get()
  static getNojs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Noj",
  })
  @post("{id}")
  static createNoj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
