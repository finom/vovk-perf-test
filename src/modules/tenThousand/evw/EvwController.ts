import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("evws")
export default class EvwController {
  @operation({
    summary: "Get Evws",
  })
  @get()
  static getEvws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Evw",
  })
  @post("{id}")
  static createEvw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
