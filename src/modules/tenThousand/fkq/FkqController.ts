import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fkqs")
export default class FkqController {
  @operation({
    summary: "Get Fkqs",
  })
  @get()
  static getFkqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fkq",
  })
  @post("{id}")
  static createFkq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
