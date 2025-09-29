import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dqms")
export default class DqmController {
  @operation({
    summary: "Get Dqms",
  })
  @get()
  static getDqms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dqm",
  })
  @post("{id}")
  static createDqm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
