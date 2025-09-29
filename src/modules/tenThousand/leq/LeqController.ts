import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("leqs")
export default class LeqController {
  @operation({
    summary: "Get Leqs",
  })
  @get()
  static getLeqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Leq",
  })
  @post("{id}")
  static createLeq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
