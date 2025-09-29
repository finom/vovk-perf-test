import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("evzs")
export default class EvzController {
  @operation({
    summary: "Get Evzs",
  })
  @get()
  static getEvzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Evz",
  })
  @post("{id}")
  static createEvz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
