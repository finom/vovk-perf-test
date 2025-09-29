import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dpes")
export default class DpeController {
  @operation({
    summary: "Get Dpes",
  })
  @get()
  static getDpes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dpe",
  })
  @post("{id}")
  static createDpe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
