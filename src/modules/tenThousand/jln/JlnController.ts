import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jlns")
export default class JlnController {
  @operation({
    summary: "Get Jlns",
  })
  @get()
  static getJlns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jln",
  })
  @post("{id}")
  static createJln = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
