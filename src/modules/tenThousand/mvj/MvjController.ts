import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mvjs")
export default class MvjController {
  @operation({
    summary: "Get Mvjs",
  })
  @get()
  static getMvjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mvj",
  })
  @post("{id}")
  static createMvj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
