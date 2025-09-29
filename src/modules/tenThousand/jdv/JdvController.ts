import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jdvs")
export default class JdvController {
  @operation({
    summary: "Get Jdvs",
  })
  @get()
  static getJdvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jdv",
  })
  @post("{id}")
  static createJdv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
