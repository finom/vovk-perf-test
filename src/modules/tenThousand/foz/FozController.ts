import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fozs")
export default class FozController {
  @operation({
    summary: "Get Fozs",
  })
  @get()
  static getFozs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Foz",
  })
  @post("{id}")
  static createFoz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
