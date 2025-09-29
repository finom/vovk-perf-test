import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fkbs")
export default class FkbController {
  @operation({
    summary: "Get Fkbs",
  })
  @get()
  static getFkbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fkb",
  })
  @post("{id}")
  static createFkb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
