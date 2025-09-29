import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iwos")
export default class IwoController {
  @operation({
    summary: "Get Iwos",
  })
  @get()
  static getIwos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iwo",
  })
  @post("{id}")
  static createIwo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
