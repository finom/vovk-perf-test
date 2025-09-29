import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fkns")
export default class FknController {
  @operation({
    summary: "Get Fkns",
  })
  @get()
  static getFkns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fkn",
  })
  @post("{id}")
  static createFkn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
