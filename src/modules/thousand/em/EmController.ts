import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ems")
export default class EmController {
  @operation({
    summary: "Get Ems",
  })
  @get()
  static getEms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Em",
  })
  @post("{id}")
  static createEm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
