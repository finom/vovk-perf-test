import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dks")
export default class DkController {
  @operation({
    summary: "Get Dks",
  })
  @get()
  static getDks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dk",
  })
  @post("{id}")
  static createDk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
