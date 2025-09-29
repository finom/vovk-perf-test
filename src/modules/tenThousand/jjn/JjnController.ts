import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jjns")
export default class JjnController {
  @operation({
    summary: "Get Jjns",
  })
  @get()
  static getJjns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jjn",
  })
  @post("{id}")
  static createJjn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
