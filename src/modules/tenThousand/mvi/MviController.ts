import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mvis")
export default class MviController {
  @operation({
    summary: "Get Mvis",
  })
  @get()
  static getMvis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mvi",
  })
  @post("{id}")
  static createMvi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
