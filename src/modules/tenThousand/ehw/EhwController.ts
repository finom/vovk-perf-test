import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ehws")
export default class EhwController {
  @operation({
    summary: "Get Ehws",
  })
  @get()
  static getEhws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ehw",
  })
  @post("{id}")
  static createEhw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
