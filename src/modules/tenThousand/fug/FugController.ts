import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fugs")
export default class FugController {
  @operation({
    summary: "Get Fugs",
  })
  @get()
  static getFugs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fug",
  })
  @post("{id}")
  static createFug = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
