import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dks")
export default class DksController {
  @operation({
    summary: "Get Dks",
  })
  @get()
  static getDks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dks",
  })
  @post("{id}")
  static createDks = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
