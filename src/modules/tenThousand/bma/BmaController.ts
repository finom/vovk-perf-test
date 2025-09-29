import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bmas")
export default class BmaController {
  @operation({
    summary: "Get Bmas",
  })
  @get()
  static getBmas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bma",
  })
  @post("{id}")
  static createBma = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
