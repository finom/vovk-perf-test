import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("heus")
export default class HeuController {
  @operation({
    summary: "Get Heus",
  })
  @get()
  static getHeus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Heu",
  })
  @post("{id}")
  static createHeu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
