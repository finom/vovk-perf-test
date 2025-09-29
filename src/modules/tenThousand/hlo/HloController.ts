import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hlos")
export default class HloController {
  @operation({
    summary: "Get Hlos",
  })
  @get()
  static getHlos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hlo",
  })
  @post("{id}")
  static createHlo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
