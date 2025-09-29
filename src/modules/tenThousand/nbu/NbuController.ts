import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nbus")
export default class NbuController {
  @operation({
    summary: "Get Nbus",
  })
  @get()
  static getNbus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nbu",
  })
  @post("{id}")
  static createNbu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
