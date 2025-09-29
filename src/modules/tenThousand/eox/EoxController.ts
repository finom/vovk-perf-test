import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eoxen")
export default class EoxController {
  @operation({
    summary: "Get Eoxen",
  })
  @get()
  static getEoxen = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eox",
  })
  @post("{id}")
  static createEox = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
