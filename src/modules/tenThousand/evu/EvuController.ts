import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("evus")
export default class EvuController {
  @operation({
    summary: "Get Evus",
  })
  @get()
  static getEvus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Evu",
  })
  @post("{id}")
  static createEvu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
