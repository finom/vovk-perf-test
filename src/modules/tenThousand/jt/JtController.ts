import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jts")
export default class JtController {
  @operation({
    summary: "Get Jts",
  })
  @get()
  static getJts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jt",
  })
  @post("{id}")
  static createJt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
