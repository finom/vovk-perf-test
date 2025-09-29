import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mcks")
export default class MckController {
  @operation({
    summary: "Get Mcks",
  })
  @get()
  static getMcks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mck",
  })
  @post("{id}")
  static createMck = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
