import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("neqs")
export default class NeqController {
  @operation({
    summary: "Get Neqs",
  })
  @get()
  static getNeqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Neq",
  })
  @post("{id}")
  static createNeq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
