import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aybs")
export default class AybController {
  @operation({
    summary: "Get Aybs",
  })
  @get()
  static getAybs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ayb",
  })
  @post("{id}")
  static createAyb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
