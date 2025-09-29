import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("czos")
export default class CzoController {
  @operation({
    summary: "Get Czos",
  })
  @get()
  static getCzos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Czo",
  })
  @post("{id}")
  static createCzo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
