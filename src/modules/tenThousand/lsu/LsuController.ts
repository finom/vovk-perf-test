import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lsus")
export default class LsuController {
  @operation({
    summary: "Get Lsus",
  })
  @get()
  static getLsus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lsu",
  })
  @post("{id}")
  static createLsu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
