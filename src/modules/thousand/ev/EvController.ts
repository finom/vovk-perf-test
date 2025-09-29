import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("evs")
export default class EvController {
  @operation({
    summary: "Get Evs",
  })
  @get()
  static getEvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ev",
  })
  @post("{id}")
  static createEv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
