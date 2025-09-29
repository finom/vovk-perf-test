import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fbus")
export default class FbuController {
  @operation({
    summary: "Get Fbus",
  })
  @get()
  static getFbus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fbu",
  })
  @post("{id}")
  static createFbu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
