import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jbos")
export default class JboController {
  @operation({
    summary: "Get Jbos",
  })
  @get()
  static getJbos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jbo",
  })
  @post("{id}")
  static createJbo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
