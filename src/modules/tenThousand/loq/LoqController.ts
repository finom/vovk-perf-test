import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("loqs")
export default class LoqController {
  @operation({
    summary: "Get Loqs",
  })
  @get()
  static getLoqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Loq",
  })
  @post("{id}")
  static createLoq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
