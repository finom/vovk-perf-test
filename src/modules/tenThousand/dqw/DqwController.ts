import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dqws")
export default class DqwController {
  @operation({
    summary: "Get Dqws",
  })
  @get()
  static getDqws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dqw",
  })
  @post("{id}")
  static createDqw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
