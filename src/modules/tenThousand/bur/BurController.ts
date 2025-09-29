import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("burs")
export default class BurController {
  @operation({
    summary: "Get Burs",
  })
  @get()
  static getBurs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bur",
  })
  @post("{id}")
  static createBur = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
