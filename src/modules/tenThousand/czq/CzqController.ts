import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("czqs")
export default class CzqController {
  @operation({
    summary: "Get Czqs",
  })
  @get()
  static getCzqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Czq",
  })
  @post("{id}")
  static createCzq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
