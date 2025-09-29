import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fkzs")
export default class FkzController {
  @operation({
    summary: "Get Fkzs",
  })
  @get()
  static getFkzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fkz",
  })
  @post("{id}")
  static createFkz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
