import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("uos")
export default class UoController {
  @operation({
    summary: "Get Uos",
  })
  @get()
  static getUos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Uo",
  })
  @post("{id}")
  static createUo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
