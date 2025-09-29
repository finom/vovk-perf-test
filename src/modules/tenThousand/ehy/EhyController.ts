import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ehies")
export default class EhyController {
  @operation({
    summary: "Get Ehies",
  })
  @get()
  static getEhies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ehy",
  })
  @post("{id}")
  static createEhy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
