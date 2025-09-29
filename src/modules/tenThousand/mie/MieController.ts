import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mies")
export default class MieController {
  @operation({
    summary: "Get Mies",
  })
  @get()
  static getMies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mie",
  })
  @post("{id}")
  static createMie = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
