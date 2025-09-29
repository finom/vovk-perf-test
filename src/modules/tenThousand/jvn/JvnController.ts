import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jvns")
export default class JvnController {
  @operation({
    summary: "Get Jvns",
  })
  @get()
  static getJvns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jvn",
  })
  @post("{id}")
  static createJvn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
