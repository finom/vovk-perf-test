import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ehps")
export default class EhpController {
  @operation({
    summary: "Get Ehps",
  })
  @get()
  static getEhps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ehp",
  })
  @post("{id}")
  static createEhp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
