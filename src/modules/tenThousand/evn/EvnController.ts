import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("evns")
export default class EvnController {
  @operation({
    summary: "Get Evns",
  })
  @get()
  static getEvns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Evn",
  })
  @post("{id}")
  static createEvn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
