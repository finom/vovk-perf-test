import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dqhs")
export default class DqhController {
  @operation({
    summary: "Get Dqhs",
  })
  @get()
  static getDqhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dqh",
  })
  @post("{id}")
  static createDqh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
