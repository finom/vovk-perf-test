import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("loxen")
export default class LoxController {
  @operation({
    summary: "Get Loxen",
  })
  @get()
  static getLoxen = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lox",
  })
  @post("{id}")
  static createLox = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
