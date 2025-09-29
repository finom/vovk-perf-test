import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mehs")
export default class MehController {
  @operation({
    summary: "Get Mehs",
  })
  @get()
  static getMehs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Meh",
  })
  @post("{id}")
  static createMeh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
