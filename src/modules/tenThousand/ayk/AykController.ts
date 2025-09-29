import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ayks")
export default class AykController {
  @operation({
    summary: "Get Ayks",
  })
  @get()
  static getAyks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ayk",
  })
  @post("{id}")
  static createAyk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
