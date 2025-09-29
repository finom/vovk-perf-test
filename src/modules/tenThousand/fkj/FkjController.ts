import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fkjs")
export default class FkjController {
  @operation({
    summary: "Get Fkjs",
  })
  @get()
  static getFkjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fkj",
  })
  @post("{id}")
  static createFkj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
