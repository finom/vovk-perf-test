import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cqs")
export default class CqController {
  @operation({
    summary: "Get Cqs",
  })
  @get()
  static getCqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cq",
  })
  @post("{id}")
  static createCq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
