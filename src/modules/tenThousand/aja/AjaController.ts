import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ajas")
export default class AjaController {
  @operation({
    summary: "Get Ajas",
  })
  @get()
  static getAjas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aja",
  })
  @post("{id}")
  static createAja = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
