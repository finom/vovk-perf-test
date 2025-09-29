import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("evfs")
export default class EvfController {
  @operation({
    summary: "Get Evfs",
  })
  @get()
  static getEvfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Evf",
  })
  @post("{id}")
  static createEvf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
