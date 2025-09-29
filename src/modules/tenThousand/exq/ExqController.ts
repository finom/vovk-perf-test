import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("exqs")
export default class ExqController {
  @operation({
    summary: "Get Exqs",
  })
  @get()
  static getExqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Exq",
  })
  @post("{id}")
  static createExq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
