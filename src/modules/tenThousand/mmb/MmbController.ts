import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mmbs")
export default class MmbController {
  @operation({
    summary: "Get Mmbs",
  })
  @get()
  static getMmbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mmb",
  })
  @post("{id}")
  static createMmb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
