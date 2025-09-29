import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cjns")
export default class CjnController {
  @operation({
    summary: "Get Cjns",
  })
  @get()
  static getCjns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cjn",
  })
  @post("{id}")
  static createCjn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
