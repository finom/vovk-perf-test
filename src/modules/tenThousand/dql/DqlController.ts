import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dqls")
export default class DqlController {
  @operation({
    summary: "Get Dqls",
  })
  @get()
  static getDqls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dql",
  })
  @post("{id}")
  static createDql = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
