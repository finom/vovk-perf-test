import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("inns")
export default class InnController {
  @operation({
    summary: "Get Inns",
  })
  @get()
  static getInns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Inn",
  })
  @post("{id}")
  static createInn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
