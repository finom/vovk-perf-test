import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jras")
export default class JraController {
  @operation({
    summary: "Get Jras",
  })
  @get()
  static getJras = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jra",
  })
  @post("{id}")
  static createJra = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
