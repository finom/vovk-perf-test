import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("juvs")
export default class JuvController {
  @operation({
    summary: "Get Juvs",
  })
  @get()
  static getJuvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Juv",
  })
  @post("{id}")
  static createJuv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
