import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mows")
export default class MowController {
  @operation({
    summary: "Get Mows",
  })
  @get()
  static getMows = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mow",
  })
  @post("{id}")
  static createMow = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
