import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cbus")
export default class CbuController {
  @operation({
    summary: "Get Cbus",
  })
  @get()
  static getCbus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cbu",
  })
  @post("{id}")
  static createCbu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
