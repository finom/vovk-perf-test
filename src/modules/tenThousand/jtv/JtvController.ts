import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jtvs")
export default class JtvController {
  @operation({
    summary: "Get Jtvs",
  })
  @get()
  static getJtvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jtv",
  })
  @post("{id}")
  static createJtv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
