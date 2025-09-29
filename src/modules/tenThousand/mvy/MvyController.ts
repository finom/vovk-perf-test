import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mvies")
export default class MvyController {
  @operation({
    summary: "Get Mvies",
  })
  @get()
  static getMvies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mvy",
  })
  @post("{id}")
  static createMvy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
