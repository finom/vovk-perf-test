import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("majs")
export default class MajController {
  @operation({
    summary: "Get Majs",
  })
  @get()
  static getMajs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Maj",
  })
  @post("{id}")
  static createMaj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
