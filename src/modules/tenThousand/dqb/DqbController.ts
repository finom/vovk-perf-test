import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dqbs")
export default class DqbController {
  @operation({
    summary: "Get Dqbs",
  })
  @get()
  static getDqbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dqb",
  })
  @post("{id}")
  static createDqb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
