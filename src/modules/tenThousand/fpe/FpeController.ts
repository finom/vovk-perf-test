import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fpes")
export default class FpeController {
  @operation({
    summary: "Get Fpes",
  })
  @get()
  static getFpes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fpe",
  })
  @post("{id}")
  static createFpe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
