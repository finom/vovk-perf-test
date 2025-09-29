import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lbus")
export default class LbuController {
  @operation({
    summary: "Get Lbus",
  })
  @get()
  static getLbus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lbu",
  })
  @post("{id}")
  static createLbu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
