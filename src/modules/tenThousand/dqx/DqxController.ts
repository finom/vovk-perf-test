import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dqxes")
export default class DqxController {
  @operation({
    summary: "Get Dqxes",
  })
  @get()
  static getDqxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dqx",
  })
  @post("{id}")
  static createDqx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
