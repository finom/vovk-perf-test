import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cyks")
export default class CykController {
  @operation({
    summary: "Get Cyks",
  })
  @get()
  static getCyks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cyk",
  })
  @post("{id}")
  static createCyk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
