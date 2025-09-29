import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bals")
export default class BalController {
  @operation({
    summary: "Get Bals",
  })
  @get()
  static getBals = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bal",
  })
  @post("{id}")
  static createBal = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
