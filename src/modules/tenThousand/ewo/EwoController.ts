import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ewos")
export default class EwoController {
  @operation({
    summary: "Get Ewos",
  })
  @get()
  static getEwos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ewo",
  })
  @post("{id}")
  static createEwo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
