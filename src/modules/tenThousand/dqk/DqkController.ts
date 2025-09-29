import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dqks")
export default class DqkController {
  @operation({
    summary: "Get Dqks",
  })
  @get()
  static getDqks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dqk",
  })
  @post("{id}")
  static createDqk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
