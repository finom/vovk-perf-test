import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dqvs")
export default class DqvController {
  @operation({
    summary: "Get Dqvs",
  })
  @get()
  static getDqvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dqv",
  })
  @post("{id}")
  static createDqv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
