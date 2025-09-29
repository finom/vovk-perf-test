import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("csus")
export default class CsuController {
  @operation({
    summary: "Get Csus",
  })
  @get()
  static getCsus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Csu",
  })
  @post("{id}")
  static createCsu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
