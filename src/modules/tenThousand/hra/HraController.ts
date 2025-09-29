import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hras")
export default class HraController {
  @operation({
    summary: "Get Hras",
  })
  @get()
  static getHras = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hra",
  })
  @post("{id}")
  static createHra = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
