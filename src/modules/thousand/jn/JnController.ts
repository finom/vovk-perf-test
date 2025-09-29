import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jns")
export default class JnController {
  @operation({
    summary: "Get Jns",
  })
  @get()
  static getJns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jn",
  })
  @post("{id}")
  static createJn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
