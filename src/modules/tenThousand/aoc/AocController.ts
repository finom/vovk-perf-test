import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aocs")
export default class AocController {
  @operation({
    summary: "Get Aocs",
  })
  @get()
  static getAocs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aoc",
  })
  @post("{id}")
  static createAoc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
