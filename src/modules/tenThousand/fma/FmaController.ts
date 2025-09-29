import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fmas")
export default class FmaController {
  @operation({
    summary: "Get Fmas",
  })
  @get()
  static getFmas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fma",
  })
  @post("{id}")
  static createFma = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
