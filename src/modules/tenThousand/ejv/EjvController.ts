import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ejvs")
export default class EjvController {
  @operation({
    summary: "Get Ejvs",
  })
  @get()
  static getEjvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ejv",
  })
  @post("{id}")
  static createEjv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
