import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eaxes")
export default class EaxController {
  @operation({
    summary: "Get Eaxes",
  })
  @get()
  static getEaxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eax",
  })
  @post("{id}")
  static createEax = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
