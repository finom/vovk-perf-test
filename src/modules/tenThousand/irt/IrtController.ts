import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("irts")
export default class IrtController {
  @operation({
    summary: "Get Irts",
  })
  @get()
  static getIrts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Irt",
  })
  @post("{id}")
  static createIrt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
