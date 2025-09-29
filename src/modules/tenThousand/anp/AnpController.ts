import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("anps")
export default class AnpController {
  @operation({
    summary: "Get Anps",
  })
  @get()
  static getAnps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Anp",
  })
  @post("{id}")
  static createAnp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
