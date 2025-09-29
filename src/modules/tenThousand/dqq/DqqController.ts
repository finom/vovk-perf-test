import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dqqs")
export default class DqqController {
  @operation({
    summary: "Get Dqqs",
  })
  @get()
  static getDqqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dqq",
  })
  @post("{id}")
  static createDqq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
