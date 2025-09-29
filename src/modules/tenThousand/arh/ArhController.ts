import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("arhs")
export default class ArhController {
  @operation({
    summary: "Get Arhs",
  })
  @get()
  static getArhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Arh",
  })
  @post("{id}")
  static createArh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
