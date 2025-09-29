import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cezs")
export default class CezController {
  @operation({
    summary: "Get Cezs",
  })
  @get()
  static getCezs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cez",
  })
  @post("{id}")
  static createCez = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
