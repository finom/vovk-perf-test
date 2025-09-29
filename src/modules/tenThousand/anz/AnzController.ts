import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("anzs")
export default class AnzController {
  @operation({
    summary: "Get Anzs",
  })
  @get()
  static getAnzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Anz",
  })
  @post("{id}")
  static createAnz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
