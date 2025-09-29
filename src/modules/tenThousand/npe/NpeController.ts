import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("npes")
export default class NpeController {
  @operation({
    summary: "Get Npes",
  })
  @get()
  static getNpes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Npe",
  })
  @post("{id}")
  static createNpe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
