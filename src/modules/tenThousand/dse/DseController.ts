import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dses")
export default class DseController {
  @operation({
    summary: "Get Dses",
  })
  @get()
  static getDses = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dse",
  })
  @post("{id}")
  static createDse = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
