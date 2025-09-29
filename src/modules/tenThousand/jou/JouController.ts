import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jous")
export default class JouController {
  @operation({
    summary: "Get Jous",
  })
  @get()
  static getJous = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jou",
  })
  @post("{id}")
  static createJou = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
