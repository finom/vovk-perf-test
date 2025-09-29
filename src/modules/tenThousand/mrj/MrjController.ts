import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mrjs")
export default class MrjController {
  @operation({
    summary: "Get Mrjs",
  })
  @get()
  static getMrjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mrj",
  })
  @post("{id}")
  static createMrj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
