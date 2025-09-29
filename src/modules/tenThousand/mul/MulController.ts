import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("muls")
export default class MulController {
  @operation({
    summary: "Get Muls",
  })
  @get()
  static getMuls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mul",
  })
  @post("{id}")
  static createMul = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
