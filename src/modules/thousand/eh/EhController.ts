import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ehs")
export default class EhController {
  @operation({
    summary: "Get Ehs",
  })
  @get()
  static getEhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eh",
  })
  @post("{id}")
  static createEh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
