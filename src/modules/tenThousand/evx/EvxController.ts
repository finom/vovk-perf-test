import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("evxes")
export default class EvxController {
  @operation({
    summary: "Get Evxes",
  })
  @get()
  static getEvxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Evx",
  })
  @post("{id}")
  static createEvx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
