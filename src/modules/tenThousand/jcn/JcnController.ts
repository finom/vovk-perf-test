import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jcns")
export default class JcnController {
  @operation({
    summary: "Get Jcns",
  })
  @get()
  static getJcns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jcn",
  })
  @post("{id}")
  static createJcn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
