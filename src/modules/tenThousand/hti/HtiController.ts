import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("htis")
export default class HtiController {
  @operation({
    summary: "Get Htis",
  })
  @get()
  static getHtis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hti",
  })
  @post("{id}")
  static createHti = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
