import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nebs")
export default class NebController {
  @operation({
    summary: "Get Nebs",
  })
  @get()
  static getNebs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Neb",
  })
  @post("{id}")
  static createNeb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
