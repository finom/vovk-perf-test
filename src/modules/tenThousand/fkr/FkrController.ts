import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fkrs")
export default class FkrController {
  @operation({
    summary: "Get Fkrs",
  })
  @get()
  static getFkrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fkr",
  })
  @post("{id}")
  static createFkr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
