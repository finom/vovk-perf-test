import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cmas")
export default class CmaController {
  @operation({
    summary: "Get Cmas",
  })
  @get()
  static getCmas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cma",
  })
  @post("{id}")
  static createCma = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
