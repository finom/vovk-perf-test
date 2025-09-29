import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("evks")
export default class EvkController {
  @operation({
    summary: "Get Evks",
  })
  @get()
  static getEvks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Evk",
  })
  @post("{id}")
  static createEvk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
