import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fkhs")
export default class FkhController {
  @operation({
    summary: "Get Fkhs",
  })
  @get()
  static getFkhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fkh",
  })
  @post("{id}")
  static createFkh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
