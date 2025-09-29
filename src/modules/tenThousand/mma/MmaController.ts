import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mmas")
export default class MmaController {
  @operation({
    summary: "Get Mmas",
  })
  @get()
  static getMmas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mma",
  })
  @post("{id}")
  static createMma = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
