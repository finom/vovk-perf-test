import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("evvs")
export default class EvvController {
  @operation({
    summary: "Get Evvs",
  })
  @get()
  static getEvvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Evv",
  })
  @post("{id}")
  static createEvv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
