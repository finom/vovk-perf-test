import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jdts")
export default class JdtController {
  @operation({
    summary: "Get Jdts",
  })
  @get()
  static getJdts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jdt",
  })
  @post("{id}")
  static createJdt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
