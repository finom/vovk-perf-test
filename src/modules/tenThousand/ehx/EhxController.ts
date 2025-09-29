import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ehxes")
export default class EhxController {
  @operation({
    summary: "Get Ehxes",
  })
  @get()
  static getEhxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ehx",
  })
  @post("{id}")
  static createEhx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
