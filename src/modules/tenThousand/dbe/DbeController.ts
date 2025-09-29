import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dbes")
export default class DbeController {
  @operation({
    summary: "Get Dbes",
  })
  @get()
  static getDbes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dbe",
  })
  @post("{id}")
  static createDbe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
