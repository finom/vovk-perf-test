import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("evies")
export default class EvyController {
  @operation({
    summary: "Get Evies",
  })
  @get()
  static getEvies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Evy",
  })
  @post("{id}")
  static createEvy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
